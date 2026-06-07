const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply('Bot online 🔥')
})

bot.on('text', async (ctx) => {
  if (ctx.from.id !== 1396548354) return

  const texto = ctx.message.text

  const partes = texto.split('|')

  if (partes.length < 3) {
    return ctx.reply('Formato errado 😅 usa: Produto | Preço | Link')
  }

  const produto = partes[0].trim()
  const preco = partes[1].trim()
  const link = partes[2].trim()

  await bot.telegram.sendMessage('@Promoraio', `💸 OFERTA IMPERDÍVEL 💸

🎁 ${produto}

💰 R$ ${preco}

🔗 ${link}

🔥 Aproveite enquanto durar o estoque!

📢 @Promoraio

⚠️ Os preços podem mudar sem aviso.`)

  ctx.reply('Promoção enviada para o canal ✅')
})

bot.launch()

console.log('Bot rodando...')
