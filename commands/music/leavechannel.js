const commando= require('discord.js-commando');

class LeaveChannelCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'leave',
            group:'music',
            memberName:'leave',
            description:'leaves current voice channel'

        });
    }
    async run(message, args){
        
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();
            message.channel.send("Disconnected");
        }
        else{
            message.channel.send("Not in voice channel");
        }
        
    }

}

module.exports= LeaveChannelCommand;