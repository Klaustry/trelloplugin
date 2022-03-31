import { addPerformer } from './contract.js'

var t = window.TrelloPowerUp.iframe()

document.getElementById('addPerformButton') &&
  document
    .getElementById('addPerformButton')
    .addEventListener('click', function (event) {
      sendRewardParams()
      console.log('Perform Clicked!')
    })

document.getElementById('cancelButton') &&
  document
    .getElementById('cancelButton')
    .addEventListener('click', function (event) {
      t.closePopup()
      console.log('Cancel Clicked!')
    })

const sendRewardParams = async () => {
  const context = t.getContext()
  console.log('Context', context.card, context.member, context.organization)
  addPerformer(context.card, context.member)
    .then((e) => {
      console.log('Success', e)
      t.closePopup()
      t.alert({
        message: '✔️ Сongratulations! You have become a performer',
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
}