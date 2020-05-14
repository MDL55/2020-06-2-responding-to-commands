// Import discord.js and create the client
const Discord = require('discord.js')
const client = new Discord.Client();

// Register an event so that when the bot is ready, it will log a messsage to the terminal
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

// Register an event to handle incoming messages
client.on('message', async msg => {
  // This block will prevent the bot from responding to itself and other bots
  if (msg.author.bot) {
    return
  }

  // Check if the message starts with '!hello' and respond with 'world!' if it does.
  if (msg.content.startsWith("!hello")) {
    msg.reply("world!")
  }

  if (msg.content.startsWith("!dm")) {
    let messageContent = msg.content.replace("!dm", "")
    msg.member.send(messageContent)
  }

  if (msg.content.startsWith("!args")) {
    const args = msg.content.split(' ')
    let messageContent = ""
    if (args.includes("foo")) {
      messageContent += "bar "
    }
    if (args.includes("bar")) {
      messageContent += "baz "
    }
    if (args.includes("baz")) {
      messageContent += "foo "
    }
    msg.reply(messageContent)
  }

})

// client.login logs the bot in and sets it up for use. You'll enter your token here.
client.login('NzAzMzg3NDU0NTEzODcyOTA2.XqN2sQ.o7p_v78VnCehEXzt8Ucwi2X-ZjM');