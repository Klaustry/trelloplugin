console.log('hello world!')

var WHITE_ICON =
  'https://everkit.org/everscale-branding-v1.0.0/badge/svg/everscale_badge_main_round.svg'
var BLACK_ICON =
  'https://everkit.org/everscale-branding-v1.0.0/badge/svg/everscale_badge_main_round.svg'

var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button')
}

const getCardRewardInfo = function (card) {
  if (card.idShort > 2 && card.idShort < 6)
    return [
      { title: 'Reward', text: `💳 ${card.idShort * 100} USDT` },
      {
        title: 'Status',
        icon:
          'https://raw.githubusercontent.com/broxus/ton-assets/master/icons/USDTv3/logo.svg',
        text: 'Active',
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
  'board-buttons': function (t, opts) {
    return [
      {
        // we can either provide a button that has a callback function
        icon: {
          dark: WHITE_ICON,
          light: BLACK_ICON,
        },
        text: '0:c809...0563',
        callback: onBtnClick,
        condition: 'edit',
      },
    ]
  },
})
