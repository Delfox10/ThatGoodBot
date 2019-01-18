const discord = require('discord.js');
const config = require('./config.json');
const bot = new discord.Client('');

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
bot.login(config.token);