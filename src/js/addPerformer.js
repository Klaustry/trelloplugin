import { addCard } from './contract.js'

var t = window.TrelloPowerUp.iframe()

document.getElementById('addPerformButton') &&
  document
    .getElementById('addPerformButton')
    .addEventListener('click', function (event) {
      sendRewardParams()
      console.log('addReward Clicked!')
    })

const sendRewardParams = async (blockcahin, amount, token) => {
  const context = t.getContext()
  console.log('sendContext', context.card, context.member, context.organization)
  console.log('sendRewardParams', blockcahin, amount, token)
  if (amount > 0) {
    console.log('amount', amount)
    addCard(context.card, context.member, amount, token)
      .then((e) => {
        console.log('Success', e)
        t.closePopup()
        t.alert({
          message: '✔️ Great! You created an award!',
          duration: 1,
        })
      })
      .catch((e) => {
        t.closePopup()
        t.alert({
          message: `❌ Error: ${e.message}!`,
          duration: 1,
        })
      })
  } else {
    t.closePopup()
    t.alert({
      message: '❌ Error: Enter amount tokens!',
      duration: 1,
    })
  }
}
