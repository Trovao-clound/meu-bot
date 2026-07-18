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

  try {
    await bot.telegram.sendMessage(
      '@Promoraio',
      `💸 OFERTA IMPERDÍVEL 💸

🎁 ${produto}

💰 R$ ${preco}

🔗 ${link}

🔥 Aproveite enquanto durar o estoque!

📢 @Promoraio

⚠️ Os preços podem mudar sem aviso.`
    )

    ctx.reply('Promoção enviada para o canal ✅')

  } catch (err) {
    console.error(err)
    ctx.reply('Erro ao enviar a promoção 😥')
  }
})

bot.launch()

console.log('Bot rodando...')
