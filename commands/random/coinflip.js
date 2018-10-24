const commando= require('discord.js-commando');

class CoinFlipCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'coinflip',
            group:'random',
            memberName:'coinflip',
            description:'flips a coin'

        });
    }
    async run(message, args){
        if(Math.floor(Math.random() * 2) == 0){
            message.channel.send("Heads!");
        }
        else{
            message.channel.send("Tails!");
        }

    }

}

module.exports= CoinFlipCommand;