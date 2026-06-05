const { Telegraf } = require('telegraf')

const bot = new Telegraf('8953031028:AAGYwuNOaOjQCgyfk5VRkDYQq4VhuA0PHfY')

bot.start((ctx) => {
  ctx.reply('Bot online 🔥')
})

bot.on('text', (ctx) => {
  ctx.reply('Você falou: ' + ctx.message.text)
})

bot.launch()

console.log('Bot rodando...')