import { ethers, BigNumber } from 'ethers'
import trelloAbi from '../js/abi/trelloContract.abi.json'
import rootTokenAbi from '../js/abi/rootToken.abi.json'
import { trelloContractAddress, tokens } from '../constants'

// 0x65980436414edce9C067e8E9bbc284E2795a39A2 RootTokenAddr ABC
// 0x433c4297C6eb05144c1289Fd84b198a639336728 trelloStorage

//const contractAddress = '0x2CB85bE6f340B231952C39c079C77A59e8B86f7f'
//const contractAddressABC = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd'
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const runTrelloContract = new ethers.Contract(
  trelloContractAddress,
  trelloAbi,
  signer,
)
const runRootTokenContract = (rootTokenAddr) =>
  new ethers.Contract(rootTokenAddr, rootTokenAbi, signer)

const runLocalTrelloContract = new ethers.Contract(
  trelloContractAddress,
  trelloAbi,
  provider,
)

export async function addCard(params) {
  console.log(params)
  // console.log([
  //   boardID,
  //   cardID,
  //   creatorID,
  //   Number(amount * 10 ** tokens[tokenIndex].decimals),
  //   tokenIndex,
  //   trelloContractAddress,
  // ])
  const result = await runRootTokenContract(params.address).approve(
    trelloContractAddress,
    BigNumber.from((params.amount * 10 ** 18).toString()),
  )
  console.log(result)

  try {
    const res = await runTrelloContract.addCard(
      params.board,
      params.card,
      params.member,
      amount * 10 ** params.decimals,
      params.symbol,
    )
    console.log('response', res)
    return await res
  } catch (e) {
    console.error(e.message)
  }
}

export async function addPerformer(boardID, cardID, performerID) {
  const res = await runTrelloContract.addPerformer(boardID, cardID, performerID)
  console.log('response', res)
  return await res
}

export async function getCard(boardID, cardID) {
  return await runLocalTrelloContract.cardInfo(boardID, cardID)
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

export async function getTokenBalance(rootTokenAddr) {
  try {
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    console.log(rootTokenAddr)
    const res = await runRootTokenContract(rootTokenAddr).balanceOf(accounts[0])
    console.log('response', res)
    return await res
  } catch (e) {
    console.error(e)
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
