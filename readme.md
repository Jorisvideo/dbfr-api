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
```js
const Discord = require("discord.js");
const client = new Discord.Client();

var DBFR = require("dbfr-api");
const dbfr = new DBFR(client, 'Token discord bot fr');

client.on('message', msg => {

let args = msg.content.split(" ").slice(1)

if(msg.content.startsWith("test")){

if(!args) return console.log("Erreur, pas d'argument");

dbfr.get(args).then(r => { console.log(r) })

}

});
```

## IMPORTANT
dbfr-api est un module compatible uniquement avec les libs en Java Script, tels que Discord.js ou Eris...
