import { addPerformer, getCard } from './contract.js'

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
  await t.alert({
    message: '✔️ Сongratulations! Reward sended!',
    duration: 1,
  })
  await t.set('card', 'shared', 'status', 3)
  await t.closePopup()
}

t.render(function () {
  return Promise.all([
    t.get('card', 'shared', 'reward'),
    t.get('card', 'shared', 'status'),
  ]).then(function () {
    //t.sizeTo('#content').done()
  })
})
