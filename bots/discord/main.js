const Discord = require("discord.js")
const client = new Discord.Client()
const PREFIX = "!"

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content ===  PREFIX + "ping") {
    msg.reply("Pong!");
  }
})

client.login(process.env.TOKEN)
