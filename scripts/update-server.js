const crypto = require('crypto')
const express = require('express');
const bodyParser = require('body-parser');
const {exec} = require("child_process");
const fs = require('fs');

if (!fs.existsSync('./secret.txt')) {
    console.log('secret.txt not found. Please create and enter secret for github');
    return;
}

const secret = fs.readFileSync('./secret.txt', {encoding: 'utf-8'}).trim();
// For these headers, a sigHashAlg of sha1 must be used instead of sha256
// GitHub: X-Hub-Signature
// Gogs:   X-Gogs-Signature
const sigHeaderName = 'X-Hub-Signature-256'
const sigHashAlg = 'sha256'

function verifyPostData(req, res, next) {
    if (!req.rawBody) {
        return next('Request body empty')
    }

    const sig = Buffer.from(req.get(sigHeaderName) || '', 'utf8')
    const hmac = crypto.createHmac(sigHashAlg, secret)
    const digest = Buffer.from(sigHashAlg + '=' + hmac.update(req.rawBody).digest('hex'), 'utf8')
    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
        return next(`Request body digest (${digest}) did not match ${sigHeaderName} (${sig})`)
    }

    return next()
}

const app = express();
app.use(bodyParser.json({
    verify: (req, res, buf, encoding) => {
        if (buf && buf.length) {
            req.rawBody = buf.toString(encoding || 'utf8');
        }
    },
}));

app.post('/git', verifyPostData, (req, res) => {
    console.log('Request was signed successfully!');
    res.status(200).send('Request body was signed');

    exec("cd /home/ubuntu/www/fds-blog && git pull origin master && hugo && cd public && tar -cf /tmp/fds_blog.tar . && curl -X POST -H \"Content-Type: application/x-tar\" -H \"Swarm-Index-Document: index.html\" -H \"Swarm-Error-Document: error.html\" --data-binary @/tmp/fds_blog.tar http://localhost:1633/dirs", (error, stdout, stderr) => {
        if (error) {
            console.log(`exec error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`exec stderr: ${stderr}`);
            return;
        }
        console.log(`exec stdout: ${stdout}`);
    });
});

app.use((err, req, res, next) => {
    if (err) console.error(err)
    res.status(403).send('Request body was not signed or verification failed')
})

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
