const snekfetch = require('snekfetch');

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

 post(client, key) {
    snekfetch.post(`https://discordbots.fr/api/v1/bot/${this.client.user.id}`, { headers: { Authorization: this.key } })
      .send({ server_count: this.client.guilds.size,
server_shard: this.client.options.shardCount})
      .catch(err => console.log('[Discordbots.fr] Erreur:' + err.text));
  }
}

module.exports = dbfr;
