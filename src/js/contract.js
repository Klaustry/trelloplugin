import { ethers } from 'ethers'
import abi from '../js/contract.abi.json'

const contractAddress = '0x2C1b05D739aeCd2006c1a685BE3cAeeD1522895D'
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, abi, signer)

export async function addCard(cardID, creatorID, amount, token) {
  await ethereum.request({ method: 'eth_requestAccounts' })
  console.log('MetaMask connected')
  const res = await contract.addCard(cardID, creatorID, amount, token)
  console.log('response', res)
  return await res
}

async function eddCard(cardID, creatorID, amount, token) {
  return 'FFFFFFFFFFFFFFFFFFFF'
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

export async function getCard() {
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
