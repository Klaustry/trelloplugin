console.log('hello world!')

import { getCard } from './contract.js'
var Promise = TrelloPowerUp.Promise

var ICON = 'https://cdn.cdnlogo.com/logos/m/79/metamask.svg'
var EVER = 'https://s2.coinmarketcap.com/static/img/coins/64x64/7505.png'

const getStatus = function (id) {
  let status = {}
  switch (id) {
    case 1:
      status = { id: id, name: `🟢 Active` }
      break
    case 2:
      status = { id: id, name: `🔵 In work` }
      break
    case 3:
      status = { id: id, name: `⚪ Сompleted` }
      break
    case 3:
      status = { id: id, name: `🔴 Dispute` }
      break
    default:
      status = {}
  }
  return status
}

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
    if (e.exists) {
      t.set('card', 'shared', 'reward', e.exists && `💳 ${e.amount} ${e.token}`)
      t.set(
        'card',
        'shared',
        'status',
        e.exists && e.performerID === '' ? 1 : 2,
      )
      //   t.set('card', 'shared', 'amount', e.amount)
      //   t.set('card', 'shared', 'token', e.token)
    }

    t.getAll()
      .then((e) => console.log(e))
      .catch(() => console.log('no data'))
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
      } else if (e.exists && e.performerID != '') {
        return [
          {
            text: `💸 Send reward`,
            callback: () => {},
          },
        ]
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
