console.log('hello world!')

import { getCard } from './contract.js'
import { getStatus, getActionButton } from './utils/helpers.js'
var Promise = TrelloPowerUp.Promise

var ICON = 'https://cdn.cdnlogo.com/logos/m/79/metamask.svg'
var EVER = 'https://s2.coinmarketcap.com/static/img/coins/64x64/7505.png'

const getCardRewardInfo = function (t, cardID) {
  return getCard(cardID.id).then(function (e) {
    //t.remove('card', 'shared')
    if (e.exists) {
      t.set('card', 'shared', 'reward', e.exists && `💳 ${e.amount} ${e.token}`)
      t.set(
        'card',
        'shared',
        'status',
        e.exists && e.performerID === '' ? 1 : 2,
      )
    }
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

async function getSliceAddress(t) {
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
      .then((e) => getActionButton(e.status, t))
      .catch(() => [])
  },
})
