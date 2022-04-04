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

export const getActionButton = function (id) {
  let action = []
  switch (id) {
    case 1:
      action = [
        {
          text: `🤝 Take perform`,
          callback: addPerformer,
        },
      ]
      break
    case 2:
      action = [
        {
          text: `💸 Send reward`,
          callback: () => {},
        },
      ]
      break
    default:
      action = [
        {
          text: `💳 Add reward`,
          callback: addReward,
        },
      ]
  }
  return action
}
