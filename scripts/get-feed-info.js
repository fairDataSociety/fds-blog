const {Bee} = require('@ethersphere/bee-js');
const fs = require('fs');

// const argv = process.argv;

async function feedRead() {
    const bee = new Bee("http://localhost:1633");
// let reference = argv[2];
    const wallet = JSON.parse(fs.readFileSync('./wallet.json', {encoding: 'utf-8'}));
    let topic = bee.makeFeedTopic('fds_blog');
    const feedReader = bee.makeFeedReader('sequence', topic, wallet.address);
    const down = await feedReader.download();
    console.log('Current feed value', down);
}

feedRead().then();
