const Discord = require('discord.js');

exports.run = function(client, message, args) {
  const sayi = args.slice(0).join('');
if(sayi.length < 1) {
  return message.reply("Lütfen silinecek mesaj miktarını yazınız..!")
} else {
  message.channel.bulkDelete(sayi);
message.channel.send("Hey, Başarıyla" + sayi + "**Mesajı Ortalıktan Kaldırdım.").then(msg => {
	msg.delete(100000000)
});
}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle '
};