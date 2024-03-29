const {Bee} = require('@ethersphere/bee-js');
const fs = require('fs');

// const gatewayBatchId = '0000000000000000000000000000000000000000000000000000000000000000';
// const bee = new Bee('https://bee-0.gateway.ethswarm.org');
const gatewayBatchId = 'd08d14fc9c685ee78ad71b5b352443c68f135991cb9fea24a4598d458ad2345b';
const bee = new Bee('http://localhost:1633');
const walletPath = '/home/ubuntu/fds-blog-credentials/wallet.json';

async function initFeed() {
    const wallet = JSON.parse(fs.readFileSync(walletPath, {encoding: 'utf-8'}));
    let topic = bee.makeFeedTopic('fds_blog');
    let feedManifest = await bee.createFeedManifest(gatewayBatchId, 'sequence', topic, wallet.address);
    console.log('topic', topic);
    console.log('feedManifest', feedManifest);
    fs.writeFileSync('./feed.txt', feedManifest);
}

async function updateFeed(reference) {
    console.log('updateFeed start');
    const wallet = JSON.parse(fs.readFileSync(walletPath, {encoding: 'utf-8'}));
    console.log('Wallet found');
    // let bee = new Bee('http://localhost:1633');
    let topic = bee.makeFeedTopic('fds_blog');
    console.log('topic', topic);
    const feedWriter = bee.makeFeedWriter('sequence', topic, wallet.privateKey);
    console.log('Start uploading reference');
    const uploaded = await feedWriter.upload(gatewayBatchId, reference);
    console.log('uploaded', uploaded);
}

async function run() {
    const result = await bee.uploadFilesFromDirectory(gatewayBatchId, '../public', {indexDocument: 'index.html'})
    console.log(result);
    try {
        await updateFeed(result.reference);
    } catch (e) {
        console.log('Error', e.message);
    }
}

initFeed().then().catch();
run().then();
