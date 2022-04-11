//import { ethers } from 'ethers'
//import abi from '../js/contract.abi.json'

// 0x65980436414edce9C067e8E9bbc284E2795a39A2 RootTokenAddr ABC
// 0x433c4297C6eb05144c1289Fd84b198a639336728 trelloStorage

const tokens = [
  {
    symbol: 'USDT',
    decimals: 18,
    contractAddress: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
  },
  {
    symbol: 'DAI',
    decimals: 18,
    contractAddress: '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
  },
]

const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_boardID',
        type: 'string',
      },
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
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'addCard',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_cardID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_boardID',
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
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'balances',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
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
        internalType: 'string',
        name: 'boardID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'cardID',
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
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'symbol',
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'cards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'curIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_boardID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_cardID',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'decreaseReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_boardID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_cardID',
        type: 'string',
      },
    ],
    name: 'existCard',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_cardID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_boardID',
        type: 'string',
      },
    ],
    name: 'finishCard',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_boardID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_cardID',
        type: 'string',
      },
    ],
    name: 'getCard',
    outputs: [
      {
        components: [
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
            internalType: 'string',
            name: 'boardID',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'cardID',
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
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'symbol',
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
        internalType: 'struct TrelloStorage.trelloInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_boardID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_cardID',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'increaseReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const abiABC = [
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: '_decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: '_name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: '_symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getOwner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'mint',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
const contractAddress = '0x2CB85bE6f340B231952C39c079C77A59e8B86f7f'
const contractAddressABC = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd'
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, abi, signer)
const contractABC = new ethers.Contract(contractAddressABC, abiABC, signer)
const runLocalContract = new ethers.Contract(contractAddress, abi, provider)

async function addCard(boardID, cardID, creatorID, amount, token) {
  const accounts = await ethereum.request({ method: 'eth_accounts' })
  // const result = await ethereum.request({
  //   method: 'wallet_watchAsset',
  //   params: {
  //     type: 'ERC20',
  //     options: {
  //       address: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
  //       symbol: 'USDTB',
  //       decimals: 18,
  //       image: 'https://metamask.github.io/test-dapp/metamask-fox.svg',
  //     },
  //   },
  // })
  // console.log('result', result)

  const result = await contractABC.approve(
    '0x9bc5baF874d2DA8D216aE9f137804184EE5AfEF4',
    '70000',
  )
  console.log(result)

  // try {
  //   const res = await contract.addCard(
  //     boardID,
  //     cardID,
  //     creatorID,
  //     amount,
  //     token,
  //   )
  //   console.log('response', res)
  //   return await res
  // } catch (e) {
  //   console.error(e)
  // }
}

async function addPerformer(cardID, performerID) {
  const res = await contract.addPerformer(cardID, performerID)
  console.log('response', res)
  return await res
}

async function getCard(boardID, cardID) {
  return await runLocalContract.cardInfo(boardID, cardID)
}

async function connect() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await ethereum.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      console.log(error)
    }
    document.getElementById('connectButton').innerHTML = 'Connected'
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    console.log(accounts)
  } else {
    document.getElementById('connectButton').innerHTML =
      'Please install MetaMask'
  }
}

document.getElementById('connectButton') &&
  document
    .getElementById('connectButton')
    .addEventListener('click', async function (event) {
      connect()
      console.log('connectWallet Clicked!')
    })
document.getElementById('addCard') &&
  document
    .getElementById('addCard')
    .addEventListener('click', async function (event) {
      await addCard(
        '111',
        '111',
        '111',
        1000000,
        '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
      ).then((e) => console.log('addcart', e))
      console.log('addCard Clicked!')
    })
document.getElementById('addPerformer') &&
  document
    .getElementById('addPerformer')
    .addEventListener('click', function (event) {
      console.log('addPerformer Clicked!')
    })
document.getElementById('getCard') &&
  document
    .getElementById('getCard')
    .addEventListener('click', async function (event) {
      const r = await contract.getCard('111', '111')
      console.log(r)
      console.log('getCard Clicked!')
    })
