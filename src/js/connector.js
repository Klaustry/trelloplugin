console.log('hello world!')

import { getCard } from './contract.js'
import { getStatus } from './utils/helpers.js'
var Promise = TrelloPowerUp.Promise

var ICON = 'https://cdn.cdnlogo.com/logos/m/79/metamask.svg'
var EVER = 'https://s2.coinmarketcap.com/static/img/coins/64x64/7505.png'

const getActionButton = function (id) {
  let action = []
  switch (id) {
    case 1:
      action = [
        {
          text: `🤝 Take perform`,
          callback: addPerformer,
        },
      ]
      break
    case 2:
      action = [
        {
          text: `💸 Send reward`,
          callback: () => {},
        },
      ]
      break
    default:
      action = [
        {
          text: `💳 Add reward`,
          callback: addReward,
        },
      ]
  }
  return action
}

const getCardRewardInfo = function (t, cardID) {
  return getCard(cardID.id).then(function (e) {
    //t.remove('card', 'shared')
    // if (e.exists) {
    //   t.set('card', 'shared', 'reward', e.exists && `💳 ${e.amount} ${e.token}`)
    //   t.set(
    //     'card',
    //     'shared',
    //     'status',
    //     e.exists && e.performerID === ''
    //       ? 1
    //       : e.exists && e.performerID != ''
    //       ? 2
    //       : 0,
    //   )
    // }

    // t.getAll()
    //   .then((e) => console.log(e))
    //   .catch(() => console.log('no data'))
    //console.log('get card info', e)
    return t
      .get('card', 'shared')
      .then(function (e) {
        console.log('eeee', e)
        return [
          { title: 'Reward', text: e.reward },
          {
            title: 'Status',
            text: getStatus(e.status).name,
          },
        ]
      })
      .catch(() => [])
  })
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

async function getSliceAddress(t) {
  t.board('all').then((e) => {
    console.log(e)
  })
  if (ethereum.isConnected()) {
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    const account = accounts[0]
    return account.slice(0, 8) + '...' + account.slice(-8, -1)
  } else {
    return false
  }
}

async function connectWallet() {
  await ethereum.request({ method: 'eth_requestAccounts' })
  console.log('MetaMask connected')
}

TrelloPowerUp.initialize({
  'card-badges': function (t) {
    return t.card('id').then(function (cardID) {
      return getCardRewardInfo(t, cardID)
    })
  },
  'card-detail-badges': function (t) {
    return t.card('id').then(function (cardID) {
      return getCardRewardInfo(t, cardID)
    })
  },
  'board-buttons': function (t, opts) {
    return getSliceAddress(t)
      .then(function (address) {
        console.log(address)
        return [
          {
            //icon: ICON,
            text: `💰 ${address}`,
            callback: () => connectWallet(),
            condition: 'edit',
          },
        ]
      })
      .catch(function () {
        return [
          {
            text: 'Connect wallet',
            callback: () => connectWallet(),
            condition: 'edit',
          },
        ]
      })
  },
  'card-buttons': function (t, opts) {
    return t
      .get('card', 'shared')
      .then((e) => getActionButton(e.status))
      .catch(() => [])
  },
})
