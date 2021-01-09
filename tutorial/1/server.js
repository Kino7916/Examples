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
  code:`$loop[30;sayhi]`
})

bot.awaitedCommand({
  name:"sayhi",
  code:`Hi <@$authorID>`
})
