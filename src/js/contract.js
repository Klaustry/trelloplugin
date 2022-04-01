import { ethers } from 'ethers'
import abi from '../js/contract.abi.json'

const contractAddress = '0x2C1b05D739aeCd2006c1a685BE3cAeeD1522895D'
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, abi, signer)

export async function addCard(cardID, creatorID, amount, token) {
  const res = await contract.addCard(cardID, creatorID, amount, token)
  console.log('response', res)
  return await res
}

export async function addPerformer(cardID, performerID) {
  const res = await contract.addPerformer(cardID, performerID)
  console.log('response', res)
  return await res
}

export async function getCard(cardID) {
  return await contract.cardInfo(cardID)
}
