const Discord = require('discord.js');

module.exports = {
    name: 'warn',
    descirption: 'warns',
    execute(message) {
        let args = message.content.split(" ").slice(0);

        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You can\'t use that.');

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send('Tag a user, or type his ID. '); 

        if(user.bot) return message.channel.send('You can\'t warn bots. '); 

        if(message.author.id === user.id) return message.channel.send('You can\'t warn yourself. ');

        if(message.guild.owner.id === user.id) return message.channel.send('You can\'t warn the server\'s owner.'); 

        let reason = args.slice(2).join(" ");

        if (!reason) reason = 'Unspecified';

        return message.channel.send(`${user} is warned`);
    }
}