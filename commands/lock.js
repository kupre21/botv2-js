const Discord = require('discord.js')

module.exports = {
    name: 'lock',
    description: 'security',
    async execute(message) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You don\'t have permission to lock channel'); 
        let channel = message.channel;
        
        channel.overwritePermissions([
            {
                id: channel.guild.roles.everyone,
                deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
            },
        ], 'SECURITY REASONS');

        message.channel.send(`${channel} is locked`);
    }
}