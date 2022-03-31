//import { addCard } from '../js/contract.js'

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

const sendRewardParams = async (blockcahin, amount, token) => {
  const context = t.getContext()
  console.log('sendContext', context.card, context.member, context.organization)
  console.log('sendRewardParams', blockcahin, amount, token)
  if (amount > 0) {
    console.log('amount', amount)
    try {
      await getCard()
      //const r = await addCard(context.card, context.member, amount, token)
      //console.log(r)
      //   t.alert({
      //     message: '✔️ Great! You created an award!',
      //     duration: 1,
      //   }),
      // )
    } catch (e) {
      console.log(e)
    }
  } else {
    t.alert({
      message: '❌ Error: Enter amount tokens!',
      duration: 1,
    })
  }
}

//import { ethers } from 'ethers'

const contractAddress = '0x2C1b05D739aeCd2006c1a685BE3cAeeD1522895D'
const abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'string',
        name: '_cardID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_creatorID',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_token',
        type: 'string',
      },
    ],
    name: 'addCard',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'string',
        name: '_cardID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_performerID',
        type: 'string',
      },
    ],
    name: 'addPerformer',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'cardInfo',
    outputs: [
      {
        internalType: 'bool',
        name: 'exists',
        type: 'bool',
      },
      {
        internalType: 'string',
        name: 'creatorID',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'creatorAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'token',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'performerID',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'performerAddr',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
]
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, abi, signer)

async function addCard(cardID, creatorID, amount, token) {
  await ethereum.request({ method: 'eth_requestAccounts' })
  console.log('MetaMask connected')
  const res = await contract.addCard(cardID, creatorID, amount, token)
  console.log('response', res)
  return await res
}

async function eddCard(cardID, creatorID, amount, token) {
  return 'FFFFFFFFFFFFFFFFFFFF'
}

async function addPerformer() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const res = await contract.addPerformer('234', '234')
      console.log('response', res)
    } catch (error) {
      console.log(error)
    }
  } else {
    document.getElementById('executeButton').innerHTML =
      'Please install MetaMask'
  }
}

async function getCard() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const res = await contract.cardInfo('234')
      console.log('getCard', res)
    } catch (error) {
      console.log(error)
    }
  } else {
    document.getElementById('executeButton').innerHTML =
      'Please install MetaMask'
  }
}
