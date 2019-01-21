const discord = require('discord.js');
const bot = new discord.Client('');
const http = require('http');
const express = require('express');
const app = express();
const yt = require('ytdl-core')

//ping ev 5 mins
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

bot.on('ready', function(){
    console.log("Ready to Roll!!")
})

bot.on('message', function(message){
//PREFIX
const prefix = ("-");
if(message.content.startsWith(prefix)){

    if(message.content.includes('hello')){
        message.channel.send("Hi!");
    }

    if(message.content.includes('who smeli?')){
        message.channel.send("Definatly Sonty!");
    }

   if(message.content.includes("stats")){
    const embed = {
        "title": `testing`,
        "description": 'also a test',
        "color": 5729485,
        };
        message.channel.send({ embed });
   }

   //SHOWAVARTAR
   if(message.content.includes("avatar")){
       message.reply(message.author.avatarURL);
   }

//VC
function voicechannel(){
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt(url, {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
          url = ""
        });
      });
}

//MUSIC
if(message.content.includes("play")) {
    var url = message.content.endsWith(message.content.valueOf());
    voicechannel;
}


}
});
bot.login(process.env.TOKEN);