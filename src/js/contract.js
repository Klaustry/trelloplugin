//import { ethers } from 'ethers'
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

export async function addPerformer() {
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

export async function getCard(cardID) {
  if (typeof window.ethereum !== 'undefined') {
    try {
      return await contract.cardInfo(cardID)
    } catch (error) {
      console.log(error)
    }
  } else {
    document.getElementById('executeButton').innerHTML =
      'Please install MetaMask'
  }
}
