<div align="center">
  <p>
    <a href="https://discordbots.fr"><img src="https://discordbots.fr/img/logo.svg" width="100" height="100" alt="discordbots.fr" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/h6vhJUy"><img src="https://discordapp.com/api/guilds/501017909389295616/embed.png" alt="Serveur Discord" /></a>
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
  const type = "user";//user ou bot (par defaut bot est choisi)
  if(msg.content.startsWith("test")){
    if(!args) return console.log("Erreur, pas d'argument");
    dbfr.get(type, args).then(r => { console.log(r) })
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
  const type = "user";//user ou bot (par defaut bot est choisi)
  if(msg.content.startsWith === "test") {
    if(!args) return console.log("Erreur, pas d'argument");
    dbfr.get(type, args).then(r => { console.log(r) });
  }
});

bot.connect();
```
### API
## Vue d'un bot
```json
{
  "approuved": false,
  "lib": "discord.js",
  "prefix": "!",
  "invitelink": "https://discordapp.com/oauth2/authorize?client_id=337997289484451840&permissions=-1&scope=bot",
  "supportserver": null,
  "descriptcourt": "bot de moderation",
  "descriptlong": "Bot de modération est de fun",
  "descripvideo": null,
  "siteweb": null,
  "github": null,
  "owner": [
    "193090359700619264"
  ],
  "shards": null,
  "server": null,
  "vote": 0,
  "_id": "337997289484451840",
  "name": "Celestia",
  "avatar": "https://cdn.discordapp.com/avatars/337997289484451840/8a9696c309c80a73c02efb74e0a72862?size=512",
  "date": "2018-10-27T20:47:03.364Z",
  "__v": 0
}
```

## Vue d'un utilisateur
```json
{
  "bio": null,
  "siteweb": null,
  "google": null,
  "facebook": null,
  "twitter": null,
  "youtube": null,
  "linkeed": null,
  "github": null,
  "email": null,
  "isProfilePublic": true,
  "_id": "193090359700619264",
  "name": "Kami-Sama",
  "avatar": "https://cdn.discordapp.com/avatars/193090359700619264/6d528215062500aef2e586dbd014577e.png?size=512",
  "__v": 0
}
```
