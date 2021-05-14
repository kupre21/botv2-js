const Discord = require('discord.js');


module.exports = {
    name: 'mute',
    description: 'mutes',
    async execute(message, client) {
        const error_message = new Discord.MessageEmbed()
            .setTitle('🛑 Error Occured [You might not have Administrator]')
            .setColor('RED')
            .setTimestamp()

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(error_message); 

        const mutedRole = message.guild.roles.cache.get('833011320181751816');
        const memberRole = message.guild.roles.cache.get('833011320076369955');
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
    }   
}