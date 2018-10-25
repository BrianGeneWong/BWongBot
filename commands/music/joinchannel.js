const commando= require('discord.js-commando');

class JoinChannelCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'join',
            group:'music',
            memberName:'join',
            description:'joins channel of command caller'

        });
    }
    async run(message, args){
        
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join();
            }
        }
        else{
            message.reply("Not in a voice channel!");
        }
    }

}

module.exports= JoinChannelCommand;