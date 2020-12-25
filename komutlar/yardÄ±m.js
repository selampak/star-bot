const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
 let botid = "546323875068379137"
    const embed = new Discord.MessageEmbed()
        .setColor("fa1a1a")
        .setThumbnail(`https://cdn.discordapp.com/emojis/762246281010741288.png?v=1`) 
        .setDescription(`Star Bot Artık V12 Sürümüyle Yeniden Sizlerle!

__Komutları __\`\`!!\`\` __Ön Ki İle Kullanabilirsiniz.__

**» Moderasyon Komutları** : \`\`!!moderasyon\`\`

**» Kullanıcı Komutları** : \`\`!!kullanıcı\`\`

**» Eğlence Komutları** : \`\`!!eğlence\`\`

**» Logo Komutları** : \`\`!!logo-yardım\`\`

:bilgi: Komutlarımızda Hata Görürseniz !!hata-bildir İle Bildirebilirsiniz.`)
        .addField(`» Star Bot Bağlantıları`,` [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=546323875068379137&scope=bot&permissions=2146958847) | [Destek Sunucusu](https://discord.gg/8TzTmeT) | [Bot Sitesi ](https://bot.selampak.cf/)`)
      /*.setImage('https://cdn.discordapp.com/attachments/689180875774099536/784840916321566800/Adsz.png')*/
    .setTitle(`Star Bot | Yardım Menüsü`, message.author.avatarURL)
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
  name: "yardım"
};