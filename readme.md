<div align="center">
  <br />
  <p>
    <a href="https://discordbots.fr"><img src="https://cdn.discordapp.com/icons/344955119005073409/4869fc782e3cda2c517a0a07f31c06e8.png?width=512" width="546" alt="discordbots.fr" /></a>
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

## Example POST
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

## Example GET
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

## IMPORTANT
dbfr-api est un module compatible uniquement avec les libs en Java Script, tels que Discord.js ou Eris...
