import { addCard } from '../js/contract.js'

var t = window.TrelloPowerUp.iframe()
console.log(t.getContext())
// console.log(t.args[0].context)
// console.log('board', t.args[0].context.board)
// console.log('card', t.args[0].context.card)
// console.log('member', t.args[0].context.member)
// console.log('organization', t.args[0].context.organization)

document.getElementById('addRewardButton') &&
  document
    .getElementById('addRewardButton')
    .addEventListener('click', function (event) {
      sendRewardParams(
        document.getElementById('idSelectBlockChain').value,
        document.getElementById('idAmount').value,
        document.getElementById('idSelectToken').value,
      )
      console.log('addReward Clicked!')
      t.closePopup()
    })

const sendRewardParams = (blockcahin, token, amount) => {
  const context = t.getContext()
  console.log('sendContext', context.card, context.member, context.organization)
  console.log('sendRewardParams', blockcahin, token, amount)
}
