const snekfetch = require('snekfetch');
const request = require('request');

class dbfr {

  constructor(client, key) {
    
    if(!client) return console.error(`[SYSTEM INFO] Cette API n\'est pas reconnu par le module`);

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
    snekfetch.post(`https://discordbots.fr/api/v1/bot/${this.client.user.id}`, { headers: { Authorization: this.key } })
      .send({ server_count: this.client.guilds.size,
server_shard: this.client.options.shardCount})
      .catch(err => console.log('[Discordbots.fr] Erreur:' + err.text));
  }

 async get(args) {
  return new Promise((resolve, reject) => {
    request(`https://discordbots.fr/api/v1/bot/${args}`, (err, res, body) => {

                    if(res.statusCode === 404) return console.log('[Discordbots.fr] Request Failed');

                    if(err || res.statusCode!== 200) return

                      console.log('chargé avec succés');

                        let objet = JSON.parse(body);

                      resolve(objet)

     })
  })
}
}

module.exports = dbfr;
