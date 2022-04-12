export const getError = function (code) {
  let error = {}
  switch (code) {
    case 1:
      error = 'Card not exists'
      break
    case 2:
      error = 'Card already exists'
      break
    case 3:
      error = 'Not enough tokens'
      break
    case 4:
      error = 'Allowance less than amount'
      break
    case 5:
      error = 'You are not creator'
      break
    case 6:
      error = 'Zero change of reward'
      break
    case 7:
      error = 'Reward is less than amount'
      break
    case 8:
      error = 'Trello balance of creator less than amount'
      break
    case 9:
      error = 'This card already has performer'
      break
    case 10:
      error = 'Reward of card is zero'
      break
    case 11:
      error = 'This card has no performer'
      break
    default:
      error = 'Unknown blockchain error'
  }
  return error
}

// string constant CARD_NOT_FOUND = "1"; //"Card not exists";
// string constant CARD_ALREADY_EXIST =  "2"; //"Card already exists";
// string constant BALANCE_IS_LOW =  "3"; //"Not enough tokens";
// string constant ALLOWANCE_LESS_THAN_AMOUNT =  "4"; //"Allowance less than amount";
// string constant NOT_CREATOR =  "5"; //"You are not creator";
// string constant ZERO_DELTA =  "6"; // "Zero change of reward"
// string constant REWARD_LESS_THAN_DELTA =  "7";  //"Reward is less than amount"
// string constant CREATOR_BALANCE_LESS_THAN_DELTA =  "8"; //"Trello balance of creator less than amount"
// string constant PERFORMER_EXISTS =  "9"; //"This card already has performer"
// string constant REWARD_IS_ZERO =  "10"; // "Reward of card is zero"
// string constant NO_PERFORMER =  "11"; //"This card has no performer"
