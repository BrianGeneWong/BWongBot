const Discord = require('discord.js');
const commando= require('discord.js-commando');
const bot = new commando.Client();
const auth = require('./auth.json');


bot.registry.registerGroup('random','Random');
bot.registry.registerGroup('music','Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("ready", () => {
    console.log("I am ready!");
});


bot.login(auth.token);