const request = require('request-promise-native');

class dbfr {

    constructor(client, key) {

        if (!client) return console.error(`[SYSTEM INFO] Cette API n\'est pas reconnu par le module`);

        this.client = client;
        this.key = key;

        this.client.on('ready', () => {
            this.post();
            setInterval(() => {
                this.post();
            }, 60000);
        });
    }

    async post() {
        try {
            return console.log(this.client);
            return await request({ // Will return an object
                uri: `https://https://discordbots.fr/api/v1/bot/${this.client.user.id}`,
                method: 'POST',
                headers: {
                    "Authorization": this.key,
                },
                body: {
                    shard: this.client.guilds.size,
                    serveurs: this.client.options.shardCount
                },
                json: true
            });
        } catch (err) {
            throw err; // Throw directly and let the user handle the error
        }
    }

    //defini par defaut le type sur la route des bots
    async get(type = "bot", args) {
        let tpbotuser;
        //permet de savoir quelle type route on va utiliser (bot ou utilisateurs)
        if (type.toLowerCase() === "users" || type.toLowerCase() === "user") {
            tpbotuser = "user";
        } else if (type.toLowerCase() === "bot" || type.toLowerCase() === "bots") {
            tpbotuser = "bot";
        } else {
            return console.error(`[SYSTEM INFO] Veuillez renseigner l'argument "type"`);
        }
        try {
            return await request({
                uri: `https://discordbots.fr/api/v1/${tpbotuser}/${args}`,
                json: true
            })
        } catch (err) {
            throw err;
        }
    }
}

module.exports = dbfr;
