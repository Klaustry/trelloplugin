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

export const getActionButton = function (id, t) {
  let action = []
  switch (id) {
    case 1:
      action = [
        {
          text: `🤝 Take perform`,
          callback: addPerformer(t),
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
          callback: addReward(t),
        },
      ]
  }
  return action
}

var addReward = function (t) {
  return t.popup({
    title: 'Create reward offer',
    url: './addReward.html',
    height: 210,
  })
}

var addPerformer = function (t) {
  return t.popup({
    title: 'take for execution',
    url: './addPerformer.html',
    height: 100,
  })
}
