<div align="center">
  <p>
    <a href="https://discordbots.fr"><img src="https://cdn.discordapp.com/icons/344955119005073409/4869fc782e3cda2c517a0a07f31c06e8.png" width="100" height="100" alt="discordbots.fr" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/a78rvrj"><img src="https://discordapp.com/api/guilds/344955119005073409/embed.png" alt="Serveur Discord" /></a>
    <a href="https://www.npmjs.com/package/dbfr-api"><img src="https://img.shields.io/npm/v/dbfr-api.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/dbfr-api"><img src="https://img.shields.io/npm/dt/dbfr-api.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/dbfr-api/"><img src="https://nodei.co/npm/dbfr-api.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

# Description
dbfr-api est un module qui vous servira a poster les stats de vos bots sur l'API du site https://discordbots.fr/

## Installation
`npm i dbfr-api`

## IMPORTANT
dbfr-api est un module compatible uniquement avec les libs en Java Script, tels que Discord.js ou Eris...

## Exemple POST
```js
const Discord = require("discord.js");
const client = new Discord.Client();

var DBFR = require("dbfr-api");
const dbfr = new DBFR(client, 'Token discord bot fr');

client.on("ready", () => {
  dbfr.post()
});

client.login("BOT_TOKEN")
```

## Exemple GET
### Discord.js
```js
const Discord = require("discord.js");
const client = new Discord.Client();

const DBFR = require("dbfr-api");
const dbfr = new DBFR(client, 'Token discord bot fr');

client.on("ready", () => {
  console.log("Ready!");
});

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
### API

```json
{
"approved":true,
"avatar":"https://cdn.discordapp.com/avatars/337997289484451840/8a9696c309c80a73c02efb74e0a72862.png?size=512",
"categories":"musique",
"count":29,
"descitype":"<br />",
"github":null,
"id":"337997289484451840",
"invite":"https://discordapp.com/oauth2/authorize?client_id=337997289484451840&scope=bot&permissions=1",
"lib":"discord.js",
"name":"Celestia",
"owner":["285837115206402049","193090359700619264"],
"prefix":"!",
"shard":1,
"shortDesc":"Bot modération et multilingue",
"timestamp":1516445761441,
"website":"https://celestia.takohell.com"
}
```
