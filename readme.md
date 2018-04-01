# Description
dbfr-api est un module qui vous servira a poster les stats de vos bots sur l'API du site https://discordbots.fr/

## Installation
`npm i dbfr-api`

## Example POST
```js
const Discord = require("discord.js");
const client = new Discord.Client();

var DBFR = require("dbfr-api");
const dbfr = new DBFR(client, 'Token discord bot fr');

client.on("ready", () => {
  dbfr.post()
});
```

## Example GET
### Discord.js
```js
const Discord = require("discord.js");
const client = new Discord.Client();

const DBFR = require("dbfr-api");
const dbfr = new DBFR(client, 'Token discord bot fr');

client.on('message', msg => {
  const args = msg.content.split(" ").slice(1);
  if(msg.content.startsWith("test")){
    if(!args) return console.log("Erreur, pas d'argument");
    dbfr.get(args).then(r => { console.log(r) })
  }
});

client.login("BOT_TOKEN")
```
### Eris
```js
const Eris = require("eris");
const bot = new Eris("BOT_TOKEN");

const DBFR = require("dbfr-api");
const dbfr = new DBFR(bot, 'Token discord bot fr');

bot.on("ready", () => {
  console.log("Ready!");
});

bot.on("messageCreate", (msg) => {
  const args = msg.content.split(" ").slice(1);
  if(msg.content.startsWith === "test") {
    if(!args) return console.log("Erreur, pas d'argument");
    dbfr.get(args).then(r => { console.log(r) });
  }
});

bot.connect();
```

## IMPORTANT
dbfr-api est un module compatible uniquement avec les libs en Java Script, tels que Discord.js ou Eris...
