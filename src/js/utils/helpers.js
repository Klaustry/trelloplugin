export const getStatus = function (id) {
  let status = {}
  switch (id) {
    case 1:
      status = { id: id, name: `🟢 Active` }
      break
    case 2:
      status = { id: id, name: `🔵 In work` }
      break
    case 3:
      status = { id: id, name: `⚪ Сompleted` }
      break
    case 3:
      status = { id: id, name: `🔴 Dispute` }
      break
    default:
      status = {}
  }
  return status
}
