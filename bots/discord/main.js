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
  if (msg.content === PREFIX + "minecraft") {
    var url = "https://api.minetools.eu/ping/dove11992.aternos.me/25565";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((request.responseText).indexOf("\\u00a74Server not found.") != -1) {
          msg.reply("Server Offline.");
        } else {
          msg.reply("Server Online.");
      }};
    xhr.send();
  }
})

client.login(process.env.TOKEN)
