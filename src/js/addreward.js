import { addCard } from '../js/contract.js'

var t = window.TrelloPowerUp.iframe()
console.log(t.getContext())

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

const sendRewardParams = (blockcahin, amount, token) => {
  const context = t.getContext()
  console.log('sendContext', context.card, context.member, context.organization)
  console.log('sendRewardParams', blockcahin, amount, token)
  if (amount > 0) {
    console.log('amount', amount)
    addCard(context.card, context.member, amount, token).then()
    t.alert({
      message: '✔️ Great! You created an award!',
      duration: 1,
    })
  } else {
    t.alert({
      message: '❌ Error: Enter amount tokens!',
      duration: 1,
    })
  }
}
