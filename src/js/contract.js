import { ethers, BigNumber } from 'ethers'
import trelloAbi from '../js/abi/trelloContract.abi.json'
import rootTokenAbi from '../js/abi/rootToken.abi.json'
import { trelloContractAddress } from '../constants'

var t = window.TrelloPowerUp.iframe()

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
  console.log('input params addCard', params)
  const result = await runRootTokenContract(params.address).approve(
    trelloContractAddress,
    BigNumber.from((params.amount * 10 ** params.decimals).toString()),
  )
  console.log('Root token approve result:', result)

  try {
    const res = await runTrelloContract.addCard(
      params.board,
      params.card,
      params.member,
      BigNumber.from((params.amount * 10 ** params.decimals).toString()),
      params.address,
    )
    console.log('Trello contract addCard result:', res)
    const event = await runTrelloContract.filters.addCard_E(params.card)
    console.log('Trello contract addCard event result:', event)
    return await res
  } catch (e) {
    console.error(e.message)
  }
}

export async function addPerformer(boardID, cardID, performerID) {
  try {
    const res = await runTrelloContract.addPerformer(
      boardID,
      cardID,
      performerID,
    )
    console.log('Trello contract addPerformer result:', res)
    return await res
  } catch (e) {
    console.log('eeeeeeee', e.data.message)
    showContractError(e.data.message)
  }
}

export async function sendReward(boardID, cardID) {
  const res = await runTrelloContract.finishCard(boardID, cardID)
  console.log('Trello contract FinishCard result:', res)
  return await res
}

export async function getCard(boardID, cardID) {
  return await runLocalTrelloContract.cardInfo(boardID, cardID)
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

function showContractError(error) {
  console.log('full data error', error)
  if (error.indexOf('execution reverted:') >= 0) {
    const regs = e.match(/\d+/)
    console.log('getError=', regs)
    t.alert({
      message: `❌ Error: ${getError(Number(regs[0]))}!`,
      duration: 2,
    })
  }
}
