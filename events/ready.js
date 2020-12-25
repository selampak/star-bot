// -Bot giriş kısmı- 
module.exports = (client) => {

var oynuyorkısımları = [
"Star Bot | 2 Adet Sunucu - 10 Adet Kullanıcıya hizmet ediyor"
]


setInterval(function() {

        var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
       client.user.setActivity(oynuyorkısımları[random], { type: 'PLAYING' });
        }, 2 * 6000);

    console.log("Bot başarı ile giriş yaptı.")
}