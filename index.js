const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'INSERT BOT TOKEN HERE';
const prefix = 'j!'

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

    
    if(command === 'jethub') {
        const JetHub = new Discord.RichEmbed()
        .setColor(0xc934eb)
        .setTitle('Jet Hub')
        .setDescription('Jet Hub is the official server of Jet Accounts / Discord Jet')
        .setAuthor(message.author.username)
        .addField('make sure to checkout our blogs!')
        .setThumbnail(message.author.avatarURL)
        .setFooter('stay tuned and have fun!')
        .setTimestamp()
      try{
        message.channel.send(JetHub);
      }  catch {
          message.reply("sorry i cannot message you, Your DMs are Closed.")
      }
    }



})


bot.login(token);