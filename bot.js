const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply('Bot online 🔥')
})

bot.on('text', async (ctx) => {
  if (ctx.from.id !== 1396548354) return
  
  const texto = ctx.message.text

  await bot.telegram.sendMessage('@Promoraio', `🔥 NOVA OFERTA 🔥\n\n${texto}`)

  ctx.reply('Promoção enviada para o canal ✅')
})

bot.launch()

console.log('Bot rodando...')
