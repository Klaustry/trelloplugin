console.log('hello world!')

import { getCard } from './contract.js'

var WHITE_ICON =
  'https://everkit.org/everscale-branding-v1.0.0/badge/svg/everscale_badge_main_round.svg'
var BLACK_ICON =
  'https://everkit.org/everscale-branding-v1.0.0/badge/svg/everscale_badge_main_round.svg'

var GRAY_ICON =
  'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg'

var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button')
}

//var addRewardButton = document.getElementById('addRewardButton')
// const get = async function (t) {
//   return t.getAll().then(function (data) {
//     console.log(data)
//   })
// }

const getCardRewardInfo = async (cardID) =>
  getCard(cardID)
    .then(function (e) {
      console.log('response', e)
      if (e.exists) {
        return [
          { title: 'Reward', text: `💳 ${cardID * 100} USDT` },
          {
            title: 'Status',
            text: `🟢 Active`,
          },
          {
            title: 'Action',
            text: `Perform`,
            callback: () => console.log('perform'),
          },
        ]
      } else return []
    })
    .catch(() => [])
//if (card.idShort > 2 && card.idShort < 6)

//else return []

var btnCallback = function (t, opts) {
  return t.popup({
    title: 'Create reward offer',
    url: './rwd-setting.html',
    //args: { myArgs: 'You can access these with t.arg()' },
    height: 210, // initial height, can be changed later
    //callback: (e) => console.log('callback', e),
  })
}

var testCallback = function (t, opts) {
  return t.popup({
    title: 'Create reward offer',
    url: './test-wallet.html',
    //args: { myArgs: 'You can access these with t.arg()' },
    height: 210, // initial height, can be changed later
    //callback: (e) => console.log('callback', e),
  })
}

async function getSliceAddress() {
  const address = await getAccount()
  console.log('Client address', address)
  return address.slice(0, 5) + '...' + address.slice(-5, -1)
}

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
  return await accounts[0]
}

async function connectWallet() {
  await ethereum.request({ method: 'eth_requestAccounts' })
  console.log('MetaMask connected')
}

// async function disconnectWallet() {
//   console.log('MetaMask discconnected')
// }

//console.log('window', document.getElementById('addRewardButton'))

// var createRewardClick = function (t, opts) {
//   console.log('createRewardClick clicked!')
//   t.closePopup()
// }

TrelloPowerUp.initialize({
  'card-badges': function (t) {
    return t.card('id').then(function (cardID) {
      console.log(cardID)
      return getCardRewardInfo(cardID)
    })
  },
  'card-detail-badges': function (t) {
    return t.card('id').then(function (cardID) {
      return getCardRewardInfo(cardID)
    })
  },
  'board-buttons': async function (t, opts) {
    return [
      {
        icon: {
          dark: WHITE_ICON,
          light: BLACK_ICON,
        },
        text: 'Connect wallet',
        callback: () => connectWallet(),
        condition: 'edit',
      },
      {
        icon: {
          dark: WHITE_ICON,
          light: BLACK_ICON,
        },
        text: 'exit',
        callback: () => {
          console.log('exit')
        },
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
      // {
      //   text: `🗨️ Test contract`,
      //   callback: testCallback,
      // },
    ]
  },
})
