# dbfr-api
Module discord bot fr
```js
const Discord = require("discord.js");
const client = new Discord.Client();
var DBFR = require("./index.js");
const dbfr = new DBFR(client, 'Token discord bot fr');

client.on("ready", () => {
  dbfr.post()
});
```
