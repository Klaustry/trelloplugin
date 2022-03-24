console.log('hello world!')

TrelloPowerUp.initialize({
  'card-badges': function (t, options) {
    return t.card('all').then(function (card) {
      console.log(card)
      return [
        { text: `💳 ${card.idShort} USDT` },
        {
          icon:
            'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/USDTv3/logo.svg',
          text: 'USDT',
        },
      ]
    })
  },
  'card-detail-badges': function (t, options) {
    return t.card('all').then(function (card) {
      console.log(card)
      return [
        { title: 'Pay', text: `💳 ${card.idShort} USDT` },
        {
          title: 'Reward',
          icon:
            'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/USDTv3/logo.svg',
          text: 'USDT',
        },
      ]
    })
  },
})
