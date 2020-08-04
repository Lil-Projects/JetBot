const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'INSERT BOT TOKEN HERE';
const prefix = "jet"

bot.on('ready', () => {
    console.log('Your Bot is now Online.')
    bot.user.setActivity('over servers',{type : "STREAMING"})
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
    bot.user.setStatus('dnd')
       .then(console.log)
       .catch(console.error); 
})

bot.on("message", message => {
    if(message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping') {
        message.reply('pong!');
    } else
    


    if(command === 'hi') {
        message.channel.send('Hey wassup !')
    } else{
        // message.channel.send('i am online but something seems to be wrong')
    }

    
    if(command === 'about') {
        const JetHub = new Discord.RichEmbed()
        .setColor(0xc934eb)
        .setTitle('Jet Hub')
        .setDescription('Jet Hub is the official server of Jet Accounts / Discord Jet')
        .setAuthor(message.author.username)
        .addField(`make sure to checkout our blogs!`)
        .setThumbnail(message.author.avatarURL)
        .setFooter('stay tuned and have fun!')
        .setTimestamp()
      try{
        message.channel.send(JetHub);
      }  catch {
          message.reply("sorry i cannot message you, Your DMs are Closed.")
      }
    }

    
    // if(command === 'invite') {
    //     message.channel.send('Here is my invite link: https://discord.com/oauth2/authorize?client_id=740089377543290903&permissions=8&scope=bot')
    // }   

    if(command === 'invite') {
        const InviteBot = new Discord.RichEmbed()
          .setTitle('Invite me')
          .setURL('https://discord.com/oauth2/authorize?client_id=740089377543290903&permissions=8&scope=bot')
		  // .setThumbnail('https://i.imgur.com/snBADAb.png')
		  .setColor("#c934eb")
		  .setDescription('Click `invite me` to invite the bot!')  		  
      try{
        message.channel.send(InviteBot);
      }  catch {
          message.reply("sorry i cannot message you, Your DMs are Closed.")
      }
    }

   
    if(command === 'ban'){
    	const userBan = message.mentions.users.first();

    	if (userBan) {
    		var member = message.guild.member(userBan);

    		if (member){
    			member.ban({
    				reason: 'You broke the Rules.'
    			}).then(() => {
    				message.reply(`${userBan.tag} was Banned from the server.`)
    			})
    		}else{
    			message.reply('That user is not in the server.');
    		}
    	}else {
    		message.reply('you need to state a user to ban.')
    	}
    }else
    

    if (command === 'kick'){
    	const userKick = message.mentions.users.first();

    	if(userKick) {
    		var member = message.guild.member(userKick);

    		if (member) {
    			member.kick('You have been kicked for breaking the Rules.').then(() => {
    				message.reply(`kicked user ${userKick.tag} !`);
    			}).catch(err => {
    				message.reply('i was not able to kick that user.')
    				console.log(err);
    			})
    		}else{
    			message.reply('That user is not in the server.')
    		}
    	}else {
    		message.reply('You need to state the person you want to kick.')
    	}
    }








})


bot.login(token);