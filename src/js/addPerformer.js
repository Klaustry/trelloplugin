import { addPerformer, getCard } from './contract.js'
import { getError } from './utils/errors.js'

var t = window.TrelloPowerUp.iframe()
var Promise = TrelloPowerUp.Promise

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
  //console.log('Context', context.card, context.member, context.organization)
  try {
    await addPerformer(context.board, context.card, context.member)
    await t.alert({
      message: '✔️ Сongratulations! You have become a performer',
      duration: 1,
    })
    await t.set('card', 'shared', 'status', 2)
    await t.closePopup()
  } catch (e) {
    t.closePopup()
    t.alert({
      message: `❌ Error: ${e.message}!`,
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
