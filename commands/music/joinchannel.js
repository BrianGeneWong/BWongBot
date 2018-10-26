const commando= require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection,message){
    var server= servers[message.guild.id];
    server.dispatcher= connection.playStream(YTDL(server.queue[0],{filter:"audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end",function(){
        if(server.queue[0]){
            Play(connection,message);
        }
        else{
            connection.disconnect();
        }
    });
}
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
                
                message.member.voiceChannel.join()
                .then(connection =>
                    {
                        message.reply('I have successfully joined the channel!');
                        console.log('Conntected!');
                    }).catch(console.log);
            }
        }
        else{
            message.reply("Not in a voice channel!");
        }
    }

}

module.exports= JoinChannelCommand;