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

  try{

      return await request.post({
        headers: {
            "Authorization": this.key,
        },
        url: `https://discordbots.fr/api/v1/bot/${this.client.user.id}`,
        json: true,
        body: {"server_count": this.client.guilds.shardCount,
"server_shard": this.client.options.shardCount}
    }, function (err, resp, body) {
        console.log(body);
});

  }catch(err){
      throw err;
     }
    }


 async get(args) {

  try{

  return new Promise((resolve, reject) => {
    request(`https://discordbots.fr/api/v1/bot/${args}`, (err, res, body) => {

                    if(res.statusCode === 503) return console.log('[dbfr-api] Request Failed, Erreur 503');

                    if(res.statusCode === 404) return console.log('[dbfr-api] Request Failed, Erreur 404');

                    if(err || res.statusCode!== 200) return

                      console.log('chargé avec succés');

                        let objet = JSON.parse(body);

                      resolve(objet)

       })
    })
  }catch(err){
      throw err;
    }
  }
}

module.exports = dbfr;
