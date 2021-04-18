const Discord = require('discord.js');


module.exports = {
    name: 'mute',
    description: 'mutes',
    async execute(message, client) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You don\'t have permission to mute someone'); 

        const mutedRole = message.guild.roles.cache.get('833397440500465705');
        const memberRole = message.guild.roles.cache.get('833397660148170762');
        const target = message.mentions.members.first();


        if (!target) return message.reply('Please tag user that you want to mute');
        if (target.user.id == message.author.id) return message.reply('You can\'t mute your self');
        if (target.roles.cache.has(mutedRole.id)) return message.reply('That user is already muted');
        if (message.member.roles.highest.position <= target.roles.highest.position) return message.reply('You cannot mute higher rank then you');

        await target.roles.add(mutedRole.id).catch(err => {
            console.log(err);
        });

        await target.roles.remove(memberRole.id).catch(err => {
            console.log(err);
        })

        return message.reply(`${target} is muted`);
    }   
}