console.log('hello world!')

var WHITE_ICON =
  'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg'
var BLACK_ICON =
  'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg'

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
        text: 'Callback',
        callback: onBtnClick,
        condition: 'edit',
      },
      {
        // or we can also have a button that is just a simple url
        // clicking it will open a new tab at the provided url
        icon: {
          dark: WHITE_ICON,
          light: BLACK_ICON,
        },
        text: 'URL',
        condition: 'always',
        url: 'https://trello.com/inspiration',
        target: 'Inspiring Boards', // optional target for above url
      },
    ]
  },
})
