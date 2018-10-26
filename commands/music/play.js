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

class PlayMusicCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'play',
            group:'music',
            memberName:'play',
            description:'plays youtube link audio'

        });
    }
    async run(message, args){
        if(!args[1]){
            message.channel.send("Please provide a YouTube Link!");
            return;
        }
        if(!message.member.voiceChannel){
            message.channel.send("You must be in a voice channel");
            return;
        }
        if(!servers[message.guild.id]){
            servers[message.guild.id] = {queue :[]}
        }
        let val = await YTDL.validateURL(args);
        if(!val) return message.channel.send("invalid link");
        var server= servers[message.guild.id];
        server.queue.push(args);
        if(!message.guild.voiceConnection){
            message.member.voiceChannel.join()
                .then(connection=>{
                    
                    Play(connection,message);
                })
        }

        else{
            Play(message.guild.voiceConnection,message);
        }
        
    }

}

module.exports= PlayMusicCommand;