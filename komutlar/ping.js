const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  const embed2 = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setDescription('**Botun pingi hesaplanıyor <a:hourglass:75802666403233902>**')
   let start = Date.now(); 
   let mesaj = await message.channel.send(embed2)
    let diff = (Date.now() - start); 
    let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
        
        const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`<a:satellite:775802345887760424> **Star Bot**\nMesaj gecikme süresi; **${diff}ms** \n\n<a:satellite:775802345887760424> **Star Bot**\nBot gecikme süresi; **${API}ms**`)
        mesaj.edit(embed);
      
    }, 5000)
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping'
};