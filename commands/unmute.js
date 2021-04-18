const Discord = require('discord.js');


module.exports = {
    name: 'unmute',
    descirpiton: 'unmutes',
    async execute(message) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You don\'t have permission to unmute someone'); 

        const mutedRole = message.guild.roles.cache.get('833011320181751816');
        const memberRole = message.guild.roles.cache.get('833011320076369955');
        const target = message.mentions.members.first();


        if (!target) return message.reply('Please tag user that you want to unmute');
        if (message.member.roles.highest.position <= target.roles.highest.position) return message.reply('You cannot unmute higher rank then you');

        await target.roles.remove(mutedRole).catch(err => {
            console.log(err);
        });

        await target.roles.add(memberRole).catch(err => {
            console.log(err);
        })

        return message.reply(`${target} is unmuted`);
    }
}