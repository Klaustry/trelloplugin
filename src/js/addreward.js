import { addCard } from './contract.js'

var t = window.TrelloPowerUp.iframe()

document.getElementById('addRewardButton') &&
  document
    .getElementById('addRewardButton')
    .addEventListener('click', function (event) {
      sendRewardParams(
        document.getElementById('idSelectBlockChain').value,
        document.getElementById('idAmount').value,
        document.getElementById('idSelectToken').value,
      )
      //console.log('addReward Clicked!')
    })

const sendRewardParams = async (blockcahin, amount, token) => {
  const context = t.getContext()
  console.log(t.getContext())
  //console.log('sendRewardParams', blockcahin, amount, token)
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
