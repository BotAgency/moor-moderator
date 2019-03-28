const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = ("*");
var randnum = 0;

bot.on('ready', function() {
    console.log('Je suis Lancer !!')
    bot.user.setGame('*help')
});
bot.on('message', message => {

    if (message.content === prefix+'help'){
      var help_embed = new Discord.RichEmbed()
        .setColor('#f80f08')
        .addField('Commade pour Kick', '*kick @mention')
        .addField('Commande pour Ban', '*ban @mention')
        .addField('Commande de suppression des messages', '*purge 1 - 100')
        .addField('Pour le NSFW', '*nsfw')
        .addField('Pour afficher l image de Issou', '*issou')
        .addField('Pour afficher un chat', '*chat')
        .addField("Pour me soutenir :heart:", "*don")
        .addField('Afficher le support :rotating_light:', '*support')
        .addField('*avatar', 'Pour avoir le lien de votre avatar Discord')
        // .addField('Commande pour kick', '*kick @mention')
        // .addField('Commande pour ban', '*ban @mention')
        .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
        var check_mp = new Discord.RichEmbed()
        .setColor('#f80f08')
        .setFooter("Bot by ß⊕† αGεηςψ Σ#6464")
        .addField("**"+message.author.username +"** ", "Les commandes t'on était envoyer en Priver")
        message.channel.sendEmbed(check_mp);
        message.author.createDM().then(channel =>{
            channel.send(help_embed);
        })
    }
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
      var no_perm = new Discord.RichEmbed()
       .setColor('#f80f08')
       .addField('Avertissement !', 'Vous n avez pas la permission de faire cela :x:')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(no_perm)
       let member = message.mentions.members.first()
       var no_mention = new Discord.RichEmbed()
       .setColor('#f80f08')
       .addField('Avertissement !', 'Veuillez mentionner un utilisateur :warning:')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
       if (!member) return message.channel.send(no_mention)
       var no_you_kick_user = new Discord.RichEmbed()
       .setColor('#f80f08')
       .addField('Avertissement !', 'Vous ne pouvez pas kick cette utilisateur')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(no_you_kick_user)
       var no_me_kick_user = new Discord.RichEmbed()
       .setColor('#f80f08')
       .addField('Avertissement !', 'Je ne peut pas kick cette utilisateur')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
       if (!member.kickable) return message.channel.send(no_me_kick_user)
       var kick_ok = new Discord.RichEmbed()
       .setColor('#11d704')
       .addField('Succes !', "**"+member.user.username + '** a été exclu :white_check_mark:')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
       member.kick()
       message.mentions.members.createDM().then(channel =>{
        channel.send("pong");
    })
       message.channel.send(kick_ok);
    }
     if (!message.guild) return
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(no_perm)
       let member = message.mentions.members.first()
       if (!member) return message.channel.send(no_mention)
       var no_you_ban_user = new Discord.RichEmbed()
       .setColor('#f80f08')
       .addField('Avertissement !', 'Vous ne pouvez pas bannir cette utilisateur')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(no_you_ban_user)
       var no_me_ban_user = new Discord.RichEmbed()
       .setColor('#f80f08')
       .addField('Avertissement !', 'Je ne peut pas bannir cette utilisateur')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
       if (!member.bannable) return message.channel.send(no_me_ban_user)
       message.guild.ban(member, {days: 7})
       var ban_ok = new Discord.RichEmbed()
       .setColor('#11d704')
       .addField('Succes !', "**"+member.user.username + '** a été banni :white_check_mark:')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
       message.channel.send(ban_ok)
    }

    if (!message.guild) return
 
    if (args[0].toLowerCase() === prefix + "purge") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(no_perm)
      var indique_count = new Discord.RichEmbed()
       .setColor('#f80f08')
       .addField('Avertissement !', 'Veuillez indiquer un nombre de messages à supprimer')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
        let count = args[1]
        if (!count) return message.channel.send(indique_count)
      var val_count = new Discord.RichEmbed()
       .setColor('#f80f08')
       .addField('Avertissement !', 'Veuillez indiquer un nombre valide')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
        if (isNaN(count)) return message.channel.send(val_count)
      var counter = new Discord.RichEmbed()
       .setColor('#f80f08')
       .addField('Avertissement !', 'Veuillez indiquer un nombre entre 1 et 100')
       .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
        if (count < 1 || count > 100) return message.channel.send(counter)
        message.channel.bulkDelete(parseInt(count) + 1)
    }

    if (message.content === prefix+'nsfw'){
      random();
    
      if (randnum == 1){
          var r1 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://i.imgur.com/vCt6q4b.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r1);
      }

      if (randnum == 2){
          var r2 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://i.imgur.com/lK5ZPE4.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r2);
      }

      if (randnum == 3){
          var r3 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://i.imgur.com/hXGQWMu.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r3);
      }

      if (randnum == 4){
          var r4 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://imgur.com/pMILx9w.gif")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r4);
      }

      if (randnum == 5){
          var r5 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://66.media.tumblr.com/0acb61b39f77cf383cc61805ce361b77/tumblr_mumezjGyBr1qihnhyo1_400.gif") //https://i.imgur.com/r64tEln.jpg
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r5);
      }

      if (randnum == 6){
          var r6 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://i.imgur.com/r64tEln.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r6);
      }

      if (randnum == 7){
          var r7 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://i.imgur.com/JZKRNYL.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r7);
      }

      if (randnum == 8){
          var r8 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://redirect.media.tumblr.com/image?url=/a365e7caec1491ea95558898b90421d2/tumblr_oxf8nspxHt1u1dbfzo1_1280.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r8);
      }

      if (randnum == 9){
          var r9 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://i.imgur.com/mrLWWOr.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r9);
      }

      if (randnum == 10){
          var r10 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://66.media.tumblr.com/c976704795428ac03b91f6068923a8ab/tumblr_oxi6xwo2I11u2zn1io1_500.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r10);
      }

      if (randnum == 11){
        var r11 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("http://imgur.com/i0R9yek.gif")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r11);
      }

      if (randnum == 12){
          var r12 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("http://imgur.com/vhTD6wt.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r12);
      }

      if (randnum == 13){
          var r13 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("http://imgur.com/zh2rMo4.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r13);
      }

      if (randnum == 14){
          var r14 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("http://imgur.com/16TaVXF.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r14);
      }

      if (randnum == 15){
          var r15 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("http://imgur.com/ANWMZIe.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r15);
      }

      if (randnum == 16){
          var r16 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://imgur.com/KTcgP1e.gif")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r16);
      }

      if (randnum == 17){
          var r17 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://imgur.com/lsPBqOg.gif")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r17);
      }

      if (randnum == 18){
          var r18 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("https://images.sex.com/images/pinporn/2016/10/21/620/16769089.gif")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r18);
      }

      if (randnum == 19){
          var r19 = new Discord.RichEmbed()
          .setColor("#f80f08")
          .setImage("http://imgur.com/PPHZDxc.jpg")
          .setFooter("Bot By ß⊕† αGεηςψ Σ#6464")
          message.channel.send(r19)
      }    
    }  

    function random(min, max) {
      min = Math.ceil(1); // max 19
      max = Math.floor(19);
      randnum = Math.floor(Math.random() * (max - min +1) + min);
    }

    if (message.content === prefix + 'issou') {
      var issou = new Discord.RichEmbed()
      .setImage('https://i.imgur.com/1hF9tiv.gif')
      .setColor("#f80f08")
      .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
      message.channel.send(issou);
    }

    if (message.content === prefix + "chat") {
      var chat = new Discord.RichEmbed()
      .setImage('https://imgur.com/iL9Fhxy.png')
      .setColor("#f80f08")
      .setFooter('Bot by ß⊕† αGεηςψ Σ#6464')
        message.channel.send(chat);
    }

    if (message.content === prefix + "helpfun") {
      var helpfun = new Discord.RichEmbed()
      .setColor('#f80f08')
      .addField('Pour le NSFW', '*nsfw')
      .addField('Pour afficher l image de Issou', '*issou')
      .addField('Pour afficher un chat', '*chat')
      message.channel.send(helpfun);
    }

    if (message.content === prefix + "don") {
      var don = new Discord.RichEmbed()
      .setColor("#f80f08")
      .setURL("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RX3XHS7R3QNB8&source=url")
      .setImage("https://imgur.com/oYf99Tu.png")
      .setTitle("Faire un DON | Tu veut faire un don ? Clic ICI")
      .setDescription("Tu peut faire un don a mon crétaeur")
      .setFooter("Bot by ß⊕† αGεηςψ Σ#6464")
      message.channel.send(don);
    }

    if (message.content === prefix + "avatar") {
        message.channel.send(message.author.avatarURL);
    }

    

});
bot.login('NTU0NzQxMjYwNTk5MDMzODY4.D3qnPA._hbtaQgLYDvn_tsxueyoVevP6aY');
