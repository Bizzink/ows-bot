// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance with permissions
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// When a message gets sent
client.on("messageCreate", message => {
    //console.log(message);
    console.log(`${message.author.username}: ${message.content}`);
});

// Login to Discord with your client's token
client.login(token);
