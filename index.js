const discord = require('discord.js')
const bot = new discord.Client('');

bot.on('ready', function(){
    console.log("Ready to Roll!!")
})

bot.on('message', function(message){

//PREFIX
const prefix = ("-");
if(message.content.startsWith(prefix)){


    if(message.content.includes('hello')){
        message.channel.sendMessage("Hi!");
    }

   if(message.content.includes("stats")){
    const embed = {
        "title": `testing`,
        "description": 'also a test',
        "color": 5729485,
        };
        message.channel.send({ embed });
   }

}
});

bot.login('NTMyMjc2MTU5NTQ3NzAzMzQ2.DxaJHg.0ylb1zEpV_2GimDjrM7nBxI854Q')