const request = require('request');

class dbfr {

  constructor(client, key) {
    
    if(!client) return console.error(`[dbfr-api] Cette API n\'est pas reconnu par le module`);

    this.client = client;
    this.key = key;

    this.client.on('ready', () => {
    this.post()
        setInterval(() => {
          this.post();
        }, 60000);
      });
    }

 async post(client, key) {
     request.post({
        headers: {
            "Authorization": this.key,
        },
        url: `https://discordbots.fr/api/v1/bot/${this.client.user.id}`,
        json: true,
        body: {"server_count": ,
"server_shard": this.client.options.shardCount}
    }, function (err, resp, body) {
        console.log(body);
});
  }


 async get(args) {
  return new Promise((resolve, reject) => {
    request(`https://discordbots.fr/api/v1/bot/${args}`, (err, res, body) => {

                    if(res.statusCode === 404) return console.log('[dbfr-api] Request Failed');

                    if(err || res.statusCode!== 200) return

                      console.log('chargé avec succés');

                        let objet = JSON.parse(body);

                      resolve(objet)

     })
  })
}
}

module.exports = dbfr;
