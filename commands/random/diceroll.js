const commando= require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'roll',
            group:'random',
            memberName:'roll',
            description:'rolls a die'
        });
    }

    async run(message, args){
        var result= Math.floor(Math.random()*6)+1;
        message.reply("You rolled a " + result);

    }
}
module.exports= DiceRollCommand;