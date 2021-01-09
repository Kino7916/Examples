const dbd = require("dbd.js")
const bot = new dbd.Bot({
  prefix:"!",
  token:"TOKEN"
})


bot.onMessage()

bot.variables({
  MyName:"Kino"
})
bot.command({
  name:"ping",
  code:`Pong!`
})
