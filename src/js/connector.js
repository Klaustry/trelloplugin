console.log('hello world!')

import { getCard } from './contract.js'
import { getStatus } from './utils/helpers.js'
var Promise = TrelloPowerUp.Promise

var ICON = 'https://cdn.cdnlogo.com/logos/m/79/metamask.svg'
var EVER = 'https://cryptologos.cc/logos/near-protocol-near-logo.svg?v=022'

const getActionButton = function (id) {
  let action = []
  switch (id) {
    case 1:
      action = [
        {
          text: `✔️ Join task`,
          callback: addPerformer,
        },
      ]
      break
    case 2:
      action = [
        {
          text: `💎 Send reward`,
          callback: sendReward,
        },
      ]
      break
    case 3:
      action = []
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

const getCardRewardInfo = async function (t, card) {
  //console.log(t.getContext(), card)
  await getCard(t.getContext().board, card.id).then(async function (e) {
    console.log(e)
    //t.remove('card', 'shared', ['reward', 'status'])
    if (e.creatorID != '') {
      t.set(
        'card',
        'shared',
        'reward',
        e.creatorID != '' && `💰 ${e.amount / 10 ** 18} ${e.symbol}`,
      )
      t.set(
        'card',
        'shared',
        'status',
        e.done ? 3 : e.performerID != '' ? 2 : e.creatorID != '' ? 1 : 0,
      )
    }

    // t.getAll()
    //   .then((e) => console.log(e))
    //   .catch(() => console.log('no data'))
    //console.log('get card info', e)
    return await t
      .get('card', 'shared')
      .then(function (e) {
        console.log('card info', e)
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
    title: 'Take for execution',
    url: './addPerformer.html',
    height: 100,
  })
}

var sendReward = function (t) {
  return t.popup({
    title: 'Send reward',
    url: './sendreward.html',
    height: 100,
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
    return t.card('id').then(function (e) {
      return getCardRewardInfo(t, e)
    })
  },
  'card-detail-badges': function (t) {
    return t.card('id').then(function (card) {
      return getCardRewardInfo(t, card)
    })
  },
  'board-buttons': function (t) {
    return getSliceAddress(t)
      .then(function (address) {
        console.log(address)
        return [
          {
            icon: EVER,
            text: `${address}`,
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
  'card-buttons': function (t) {
    return t
      .get('card', 'shared')
      .then((e) => getActionButton(e.status))
      .catch(() => [])
  },
})
