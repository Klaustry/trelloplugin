var t = window.TrelloPowerUp.iframe()
console.log(t.arg())

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
      TrelloPowerUp.iframe().closePopup()
    })

const sendRewardParams = (blockcahin, token, amount) => {
  console.log('sendRewardParams', blockcahin, token, amount)
}
