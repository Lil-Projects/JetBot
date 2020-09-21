const Discord = require('discord.js');
require('dotenv').config();
const bot = new Discord.Client();
const token = process.env.TOKEN;
const prefix = "jet"
const ms = require('ms');


bot.on('ready', () => {

    console.log('Your Bot is now Online.')
    bot.user.setActivity("with the gang", { type: "STREAMING", url: "https://www.youtube.com/watch?v=DWcJFNfaw9c"})
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
    bot.user.setStatus('dnd')
        .then(console.log)
        .catch(console.error);          

})
  

bot.on("message", message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if (command === 'ping') {
        message.reply('pong!');
    } else


    if (command === 'hi') {
        message.channel.send('Hey wassup !')
    } else {
        // message.channel.send('i am online but something seems to be wrong')
    }


    if (command === 'about') {
        const JetHub = new Discord.RichEmbed()
            .setColor(0xc934eb)
            .setTitle('__About Bot__ :')
            .setDescription('JetBot was initially made for JetHub | official discord server but now it\'s an open source discord bot with some really cool features !')
            // .setAuthor(message.author.username)
            .addField(`Support server :`, `https://discord.gg/RsBUdcH`)
            // .setThumbnail(message.author.avatarURL)
            .setFooter('stay tuned and have fun!')
            .setTimestamp()
        try {
            message.channel.send(JetHub);
        } catch {
            message.reply(`sorry <@${message.author.username}> i cannot respond the command at the moment.`)
        }
    }


    if (command === 'invite') {
        const InviteBot = new Discord.RichEmbed()
            .setTitle('Invite me')
            .setURL('https://discord.com/oauth2/authorize?client_id=740089377543290903&permissions=8&scope=bot')
            // .setThumbnail('https://i.imgur.com/snBADAb.png')
            .setColor("#c934eb")
            .setDescription('Click `invite me` to invite the bot!')
        try {
            message.channel.send(InviteBot);
        } catch {
            message.reply("sorry i cannot message you, Your DMs are Closed.")
        }
    }


    if (command === 'ban') {

        if (message.member.hasPermission('BAN_MEMBERS')) {
            const userBan = message.mentions.users.first();

            if (userBan) {
                var member = message.guild.member(userBan);

                if (member) {
                    member.ban({
                        reason: 'You broke the Rules.'
                    }).then(() => {
                        message.channel.send(`${userBan.tag} was Banned from the server. \nhttps://imgur.com/JGIcxj6`)
                    })
                } else {
                    message.reply('That user is not in the server.');
                }
            } else {
                message.channel.send(`And who do you want me to kill? \n https://i.imgur.com/RkIfjMP.gif`)
            }
        } else {
            message.reply('Hey...You cannot use that.')
        }

    } else


    if (command === 'kick') {

        if (message.member.hasPermission('KICK_MEMBERS')) {
            const userKick = message.mentions.users.first();

            if (userKick) {
                var member = message.guild.member(userKick);

                if (member) {
                    member.kick('You have been kicked for breaking the Rules.').then(() => {
                        message.channel.send(`kicked ${userKick.tag}  \nhttps://gph.is/1NYr9tT`);
                    }).catch(err => {
                        message.reply('i was not able to kick that user.')
                        console.log(err);
                    })
                } else {
                    message.reply('That user is not in the server.')
                }
            } else {
                message.reply('You need to state the person you want to kick.')
            }
        } else {
            message.reply('Hey...You cannot use that.')
        }
    }
  
    
    if (command === `userinfo`) {
        const serverInfo = new Discord.RichEmbed()
            .setTitle(`About User :`)
            .setColor("#c934eb")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
                
                Username : ${message.author.username}
                
                ID : ${message.author.id}

                Account created : ${message.createdAt}
                
            `)
        try {
            message.channel.send(serverInfo);
        } catch {
            message.reply("Oops i can't send messages right now.")
        } 
    }

    
    if (command === 'serverinfo') {
        const serverInfo = new Discord.RichEmbed()
            .setTitle(`${message.guild.name}`)           
            .setColor("#c934eb")
            .setDescription(`
                ID : ${message.guild.id} 

                Member count : ${message.guild.memberCount}

                Text channels : ${message.guild.channels.filter((c) => c.type === "text").size}

                Voice channels : ${message.guild.channels.filter((c) => c.type === "voice").size}
                
                Emojis : ${message.guild.emojis.size} 

                Roles : ${message.guild.roles.size} 

                Owner : ${message.guild.owner} 
                
                Region : ${message.guild.region}

                Server icon : ${message.guild.iconURL}
                
            `)
        try {
            message.channel.send(serverInfo);
        } catch {
            message.reply("Oops i can't send messages right now.")
        }
    }
    
    
    if (command === 'help') {
        const Help = new Discord.RichEmbed()
            .setTitle(`JetBot - Help`)           
            .setColor("#c934eb")
            .setDescription('my prefix : `jet` \n\n:robot: **Bot Commands** \n`about` , `invite` \n\n:tools: **Moderation Commands** \n`kick` , `Ban`\n\n:gear: **Utility Commands** \n`userinfo` , `serverinfo` \n\n:zany_face: **Fun Commands** \n`hi` , `ping` \n\n:bulb:**Support Server** : \nhttps://discord.gg/59HSBfT           ')
        try {
            message.channel.send(Help);
        } catch {
            message.reply("Oops i can't send messages right now.")
        }
    }


})


bot.login(token);