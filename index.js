const Discord = require('discord.js');
const commando= require('discord.js-commando');
const bot = new commando.Client();

//token contained in this file
const auth = require('./auth.json');
const redditauth= require('./redditauth.json');
const snoowrap= require('snoowrap');



bot.registry.registerGroup('random','Random');
bot.registry.registerGroup('music','Music');
//bot.registry.registerGroup('reddit','Reddit');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.servers = {};

bot.on("ready", () => {
    console.log("I am ready!");
});


bot.login(auth.token);