const Discord = require('discord.js');

module.exports = {
    name: 'unlock',
    description: 'unlocks',
    execute(message) {
        const error_message = new Discord.MessageEmbed()
            .setTitle('🛑 Error Occured [You might not have Administrator]')
            .setColor('RED')
            .setTimestamp()

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(error_message); 
        let channel = message.channel;

        channel.overwritePermissions([
            {
                id: channel.guild.roles.everyone,
                allow: ['SEND_MESSAGES', 'ADD_REACTIONS'],
            },
        ], 'SECURITY REASONS');

        message.channel.send(`${channel} is unlocked!`);
    }
}