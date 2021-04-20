const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();
client.setMaxListeners(0);

const TOKEN = "ODMzMjY0Mzc0NjUxMTU4NTUw.YHvz7A.mQ4L98YFoTaItJrkCsYstkYZmgQ";
const prefix = ';';

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(`Prefix: ${prefix}`);
});

//moderation
client.on('message', message => {
    if (message.content.startsWith(`${prefix}ban`)) {
        client.commands.get('ban').execute(message);
    }
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}kick`)) {
        client.commands.get('kick').execute(message);
    }
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}lock`)) {
        client.commands.get('lock').execute(message);
    }
});


client.on('message', message => {
    if (message.content.startsWith(`${prefix}unlock`)) {
        client.commands.get('unlock').execute(message);
    }
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}mute`)) {
        client.commands.get('mute').execute(message);
    }
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}unmute`)) {
        client.commands.get('unmute').execute(message);
    }
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}warn`)) {
        client.commands.get('warn').execute(message);
    }
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}say`)) {
        client.commands.get('say').execute(message);
    }
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}help`)) {
        client.commands.get('help').execute(message);
    }
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        client.commands.get('ping').execute(message, client);
    }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get('833011320889540610');
    channel.send(`${member} has joined! Hope you'll have fun here`);
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.get('833011320889540610');
    channel.send(`${member} has left the server. RIP`);
})



client.login(TOKEN);    