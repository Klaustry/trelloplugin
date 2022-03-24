console.log('hello world!')

const getCardRewardInfo = function (card) {
  if (card.idShort > 2 && card.idShort < 5)
    return [
      { title: 'Pay', text: `💳 ${card.idShort} USDT` },
      {
        title: 'Reward',
        icon:
          'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/USDTv3/logo.svg',
        text: 'USDT',
      },
    ]
  else return []
}

TrelloPowerUp.initialize({
  'card-badges': function (t, options) {
    return t.card('all').then(function (card) {
      console.log(card)
      return getCardRewardInfo(card)
    })
  },
  'card-detail-badges': function (t, options) {
    return t.card('all').then(function (card) {
      return getCardRewardInfo(card)
    })
  },
})
