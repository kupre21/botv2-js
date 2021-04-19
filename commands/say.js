const Discord = require('discord.js');

module.exports = {
    name: 'say',
    description: 'says what user says',
    execute(message) {
        let args = message.content.split(" ").slice(0);

        let say = args.slice(1).join(" ");

        let author = message.author;

        return message.channel.send(`${author} said ${say}`);
    }
}