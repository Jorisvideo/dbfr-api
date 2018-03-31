const request = require('request-promise-native');

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
    try{
      return await request({ // Will return an object
        uri: `https://https://discordbots.fr/api/v1/bot/${this.client.user.id}`,
        method: 'POST',
        headers: {
          "Authorization": this.key,
        },
  
        body: {
          server_count: this.client.guilds.size,
          server_shard: this.client.options.shardCount
        },
  
        json: true
      });
    }catch(err){
      throw err; // Throw directly and let the user handle the error
    }
  }

  async get(args) {
    try{
      return await request({
        uri: `https://discordbots.fr/api/v1/bot/${args}`,
        
        json: true
      })
    }catch(err){
      throw err;
    }
  }
}

module.exports = dbfr;
