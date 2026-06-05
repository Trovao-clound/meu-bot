const { Telegraf } = require('telegraf')

new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply('Bot online 🔥')
})

bot.on('text', (ctx) => {
  ctx.reply('Você falou: ' + ctx.message.text)
})

bot.launch()

console.log('Bot rodando...')
