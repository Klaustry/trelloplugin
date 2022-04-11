export function amountToDecimals(amount, decimals) {
  const decimalsBN = web3.utils.toBN(decimals)
  const balanceWeiBN = web3.utils.toBN(amount)
  const divisor = web3.utils.toBN(10).pow(decimalsBN)

  const result = balanceWeiBN.mul(divisor)
  return result.toString()
}

const erc20 = new ethereum.web3Ethereum.eth.Contract(abiErc20, USDTAddr)

const amountWithDecimals = amountToDecimals(
  5, //amount - 1 юсдт
  18, //decimals
)

const allowance = await erc20.methods
  .allowance(addressEth, contractAddr) //адрес юзера и адрес от нашего контракта
  .call()

if (allowance < amountWithDecimals) {
  // если алованс меньше чем нам нужно мы расширяем его
  await erc20.methods
    .approve(contractAddr, amountWithDecimals.toString())
    .send({
      from: addressEth,
    })
}
