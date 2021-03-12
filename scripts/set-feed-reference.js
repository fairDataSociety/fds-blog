const fs = require('fs');
const {Bee} = require('@ethersphere/bee-js');
const argv = process.argv;
const reference = argv[2];

if (!reference || reference.length !== 64) {
    console.log('Incorrect reference');
    return;
}

async function updateFeed(reference) {
    const wallet = JSON.parse(fs.readFileSync('./wallet.json', {encoding: 'utf-8'}));
    let bee = new Bee('http://localhost:1633');
    let topic = bee.makeFeedTopic('fds_blog');
    const feedWriter = bee.makeFeedWriter('sequence', topic, wallet.privateKey);
    const uploaded = await feedWriter.upload(reference);
    console.log('uploaded', uploaded);
}

updateFeed(reference).then();
