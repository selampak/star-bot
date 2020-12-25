const Discord = require("discord.js"); 
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0NjMyMzg3NTA2ODM3OTEzNyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg4MzQ1MDE1fQ.aSKp-y_GSLix6Qdi2iMGcZ9cXkohe2qGnAw9WNtnqpE', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(oyvermis => { 
        if (!oyvermis) {
  const selampakembed = new Discord.MessageEmbed()
.setTitle("<a:wifi:752536192876019803>UYARI<a:wifi:752536192876019803>")
.setColor("#fff300")
.setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.addField(`Bu komutu kullanmak için botu her 12 saatte bir oylamanız gerekiyor`,`Eğer oyladıysanız onaylanması için 1 veya 2 dakika bekleyin.`)
.addField("Oy Vermek için:", `[Bana Tıkla!](https://top.gg/bot/546323875068379137/vote)`)
.setImage('https://cdn.discordapp.com/attachments/709396314601029722/765282262722805770/Selampak_Discord_Botu.gif')
message.channel.send(selampakembed)

        } else {
exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Bişey Yaz")
let link = "https://habbofont.net/font/steampunk/"+isim+".gif"
  const embed = new Discord.MessageEmbed()
  .setColor("#fffa00")
  .setDescription(+ isim +" Adlı Logonuz Oluşturuldu!")
  .setFooter(`Star Bot`)
  .setImage(link)
  message.channel.send(embed)
};
        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
   
};

exports.help = {
  name: 'altınlogo'
 
};