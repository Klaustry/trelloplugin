console.log('hello world!')

import { getCard } from './contract.js'

var ICON = 'https://cdn.cdnlogo.com/logos/m/79/metamask.svg'

const getCardRewardInfo = async function (cardID) {
  console.log('cardID', cardID.id)
  return await getCard(cardID.id)
    .then(function (e) {
      console.log('response', e)
      if (e.exists) {
        return [
          { title: 'Reward', text: `💳 ${e.amount} ${e.token}` },
          {
            title: 'Status',
            text: e.performerID === '' ? `🟢 Active` : `🔵 In work`,
          },
        ]
      } else return []
    })
    .catch(() => [])
}

const getRewardButton = async function (cardID) {
  return await getCard(cardID.id)
    .then(function (e) {
      if (e.exists && e.performerID === '') {
        return [
          {
            text: `🤝 Take perform`,
            callback: addPerformer,
          },
        ]
        // } else if (e.exists) {
        //   return [
        //     {
        //       text: `❌ Сancel reward`,
        //       callback: () => {},
        //     },
        //   ]
      } else {
        return [
          {
            text: `💳 Add reward`,
            callback: addReward,
          },
        ]
      }
    })
    .catch(() => [])
}

var addReward = function (t) {
  return t.popup({
    title: 'Create reward offer',
    url: './addReward.html',
    height: 210,
  })
}

var addPerformer = function (t) {
  return t.popup({
    title: 'take for execution',
    url: './addPerformer.html',
    height: 100,
  })
}

async function getSliceAddress() {
  if (ethereum.isConnected()) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    const account = accounts[0]
    return account.slice(0, 5) + '...' + account.slice(-5, -1)
  } else {
    return 'Connect wallet'
  }
}

const getAccount = async () => {
  ethereum.isConnected()
    ? await ethereum.request({ method: 'eth_requestAccounts' })
    : false
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
        icon: ICON,
        text: getSliceAddress(),
        callback: () => connectWallet(),
        condition: 'edit',
      },
    ]
  },
  'card-buttons': function (t, opts) {
    //console.log(t, opts)
    return t.card('id').then(function (cardID) {
      return getRewardButton(cardID)
    })
  },
})
