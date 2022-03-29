console.log('hello world!')

var WHITE_ICON =
  'https://everkit.org/everscale-branding-v1.0.0/badge/svg/everscale_badge_main_round.svg'
var BLACK_ICON =
  'https://everkit.org/everscale-branding-v1.0.0/badge/svg/everscale_badge_main_round.svg'

var GRAY_ICON =
  'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg'

var onBtnClick = function () {
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
var btnCallback = function (t, opts) {
  return t.popup({
    title: 'Create reward offer',
    url: './rwd-setting.html',
    args: { myArgs: 'You can access these with t.arg()' },
    height: 210, // initial height, can be changed later
  })
}

const createRewardClick = (t, opts) => {
  console.log('createRewardClick clicked!')
  var t = window.TrelloPowerUp.iframe()
  t.closePopup()
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
  'card-buttons': function (t, opts) {
    //console.log(t, opts)
    return [
      {
        text: `💳 Add reward`,
        callback: btnCallback,
      },
    ]
  },
})
