//import { ethers } from 'ethers'

document.getElementById('connectWallet') &&
  document
    .getElementById('connectWallet')
    .addEventListener('click', async function (event) {
      await addCard('dfgdfg', 'dfgdfg', 23423, 'dfgdfg')
    })

document.getElementById('addCard') &&
  document
    .getElementById('addCard')
    .addEventListener('click', async function (event) {
      await addCard('weer', 'dwer', 23423, 'derer')
    })

document.getElementById('addPerformer') &&
  document
    .getElementById('addPerformer')
    .addEventListener('click', async function (event) {
      await addPerformer()
    })

document.getElementById('getCard') &&
  document
    .getElementById('getCard')
    .addEventListener('click', async function (event) {
      await getCard()
    })

document.getElementById('addRewardButton') &&
  document
    .getElementById('addRewardButton')
    .addEventListener('click', function (event) {
      addCard(
        'www',
        'qqqqqqqqqqq',
        parseInt(document.getElementById('idAmount').value),
        document.getElementById('idSelectToken').value,
      )
      console.log('addReward Clicked!')
    })

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

getCard()
