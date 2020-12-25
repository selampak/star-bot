const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
 let botid = "546323875068379137"
    const embed = new Discord.MessageEmbed()
        .setColor("fa1a1a")
       .setThumbnail(`https://cdn.discordapp.com/avatars/687728943259975746/c5511d99691d71396b675b86024725e1.webp`) 
        .setDescription(`

**Star Bot V12 Sürümüyle Yeniden Sizlerle!**

» **!!sa-as** : Sa-as Ayarlarsınız.

» **!!küfür-engel** : Küfür-Engel Ayarlarsınız.

» **!!reklam-engel** : Reklam-Engel Ayarlarsınız.

» **!!oylama** : Sunucunuzda Oylama Yaparsınız.

» **!!kullanıcı-bilgi** : Kullanıcı Bilgilerini Gösterir.

» **!!kick** : Belirttiğiniz Kişiyi Sunucudan Kickler.

» **!!kanalaçıklama** : Kanal Açıklamasını Değiştirir.
`)
        .addField(`» Star Bot Bağlantıları`,` [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=546323875068379137&scope=bot&permissions=2146958847) | [Destek Sunucusu](https://discord.gg/8TzTmeT) | [Bot Sitesi ](https://bot.selampak.cf/)`)
      .setImage('https://cdn.discordapp.com/attachments/689180875774099536/784840916321566800/Adsz.png')
    .setTitle(`Star Bot | Moderasyon Menüsü`, message.author.avatarURL)
    message.channel.send(embed); 
//[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "moderasyon"
};