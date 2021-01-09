const dbd = require("dbd.js")
const bot = new dbd.Bot({
  prefix:"!",
  token:"Nzk2OTk1ODM5MjA1MzEwNTA0.X_gCNw.pq11xQ2GBfotGmECDG6daQ0ZQyE"
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
