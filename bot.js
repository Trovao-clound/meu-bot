const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply('Bot online 🔥')
})

bot.on('text', async (ctx) => {
  if (ctx.from.id !== 1396548354) return

  const texto = ctx.message.text

  await bot.telegram.sendMessage('@Promoraio', `💸💸💸 OFERTA IMPERDÍVEL 💸💸💸

${texto}

🔥 Aproveite enquanto durar o estoque!

🛒 Corra para garantir o seu!

📢 Mais ofertas em:
@Promoraio

⚠️ Os preços podem mudar sem aviso.`)

  ctx.reply('Promoção enviada para o canal ✅')
})

bot.launch()

console.log('Bot rodando...')
