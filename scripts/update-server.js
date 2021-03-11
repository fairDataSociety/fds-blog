const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

if (!fs.existsSync('./secret.txt')) {
    console.log('secret.txt not found. Please create and enter secret for github');
    return;
}

const secret = fs.readFileSync('./secret.txt');
const app = express();
app.use(bodyParser.json());

app.post('/git', (req, res) => {
    try {
        console.log(req.body);
        if (req.body.hook.config.secret === secret) {
            console.log('Secret is ok');
            res.sendStatus(200);
            return;
        } else {
            console.log('Secret is not ok');
        }
    } catch (e) {
        console.log('Error', e);
    }

    res.sendStatus(503);
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
