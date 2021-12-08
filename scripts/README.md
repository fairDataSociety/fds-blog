# Description

update-server.js - script for auto-deploy blog from git to swarm (via local bee client).

Create secret.txt with secret text from GitHub repository.

* Run update-server.js with pm2
* Configure your server to accept POST requests
* Install swarm bee client
* Install Gohugo for blog building


## Create stamp

`swarm-cli stamp buy --depth 20 --amount 1000000000`

Apache2 config

```
ProxyPass /web3/ http://127.0.0.1:1633/bzz/f59da200b25652e2fc966143625d229d7b2955ea9308dd39958600635a4cf565/
ProxyPassReverse /web3/ http://127.0.0.1:1633/bzz/f59da200b25652e2fc966143625d229d7b2955ea9308dd39958600635a4cf565/
ProxyPass /web3 http://127.0.0.1:1633/bzz/f59da200b25652e2fc966143625d229d7b2955ea9308dd39958600635a4cf565/
ProxyPassReverse /web3 http://127.0.0.1:1633/bzz/f59da200b25652e2fc966143625d229d7b2955ea9308dd39958600635a4cf565/
```

Blog feed

`f59da200b25652e2fc966143625d229d7b2955ea9308dd39958600635a4cf565`
