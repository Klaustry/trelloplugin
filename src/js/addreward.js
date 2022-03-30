console.log('window', document.getElementById('addRewardButton'))

const trello = TrelloPowerUp.iframe()

document
  .getElementById('addRewardButton')
  .addEventListener('click', function (event) {
    console.log('addReward Clicked!')
    trello.closePopup()
  })

var createRewardClick = function (t, opts) {
  console.log('createRewardClick clicked!')
  t.closePopup()
}
