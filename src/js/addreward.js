import { addCard, getTokenBalance } from './contract.js'
import { tokens } from '../constants'

var t = window.TrelloPowerUp.iframe()
var Promise = TrelloPowerUp.Promise

document.getElementById('addRewardButton') &&
  document
    .getElementById('addRewardButton')
    .addEventListener('click', function (event) {
      sendRewardParams(
        parseFloat(document.getElementById('idAmount').value),
        parseInt(document.getElementById('idSelectToken').value),
      )
      console.log('addReward Clicked!')
    })

document.addEventListener('DOMContentLoaded', function () {
  var s = document.getElementById('idSelectToken')
  tokens.forEach(async function (element, key) {
    getTokenBalance(element.contractAddress).then(
      (e) =>
        (s[key] = new Option(
          `${e / 10 ** element.decimals} ${element.symbol}`,
          key,
        )),
    )
  })
})

const sendRewardParams = async (amount, tokenIndex) => {
  const context = t.getContext()
  //console.log(t.getContext())
  //console.log('sendRewardParams', blockcahin, amount, token)
  if (amount > 0) {
    const params = {
      board: context.board,
      card: context.card,
      member: context.member,
      amount: amount,
      symbol: tokens[tokenIndex].symbol,
      decimals: tokens[tokenIndex].decimals,
      address: tokens[tokenIndex].contractAddress,
    }
    try {
      if (await addCard(params)) {
        // .then(async (e) => {
        //   console.log('Success', e)
        await t.set(
          'card',
          'shared',
          'reward',
          `💰 ${params.amount} ${params.symbol}`,
        )
        await t.set('card', 'shared', 'status', 1)
        await t.alert({
          message: '✔️ Great! You created an award!',
          duration: 1,
        })
      }
      await t.closePopup()
    } catch (e) {
      await t.alert({
        message: `❌ Error: ${e.message}!`,
        duration: 1,
      })
      await t.closePopup()
    }
  } else {
    t.closePopup()
    t.alert({
      message: '❌ Error: Enter amount tokens!',
      duration: 1,
    })
  }
}

t.render(function () {
  return Promise.all([
    t.get('card', 'shared', 'reward'),
    t.get('card', 'shared', 'status'),
  ]).then(function () {
    //t.sizeTo('#content').done()
  })
})
