const discord = require('discord.js');
const config = require('./config.json');
const client = new discord.Client('');

client.on('ready', function(){
    console.log("Ready to Roll!!")
})

client.on('message', function(message){
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

   //VC
   //JOIN
   if(message.content.includes("join")){
   if(message.member.voiceChannel){
   if(!message.guild.voiceConnection){
        message.member.voiceChannel.join()
        .then(connection =>{
            message.send("joined")});
    }
        }else{
            message.channel.send("Join a VC first!");
            }
    }






}
});
client.login(config.token);