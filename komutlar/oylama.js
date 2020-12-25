const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`).then(m => m.delete({ timeout: 10000}));

  message.delete();

  let question = args.join(" ");

  let user = message.author.username;

  if (!question) return message.channel.send(new Discord.MessageEmbed().setTitle(`Lütfen Bir Yazı Yazınız!`)).then(m => m.delete(({ timeout: 5000})));

  message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail("https://cdn.discordapp.com/avatars/687728943259975746/c5511d99691d71396b675b86024725e1.webp")
        .setTimestamp()
        .setFooter("Star Bot", client.user.avatarURL())
        .addField(`${client.user.username}`, `**${question}**`)
                       
    )
    .then(function(message) {
      message.react("👍");
      message.react("👎");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 0
};

exports.help = {
  name: "oylama"
};
