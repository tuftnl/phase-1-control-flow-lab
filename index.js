function scuberGreetingForFeet(someNumber){
  // Write your code here!
  let phrase = ''
  if (someNumber <= 400) {
    phrase = 'This one is on me!'
  }
  if (someNumber >= 400 && someNumber <= 2000){
    phrase = 'That will be twenty bucks.'
  }
  if (someNumber > 2000 && someNumber < 2500) {
    phrase = 'I will gladly take your thirty bucks.'
  }
  if (someNumber >= 2500) {
    phrase = 'No can do.'
  }
  return phrase
}

function ternaryCheckCity(cityName){
  // Write your code here!
  return (cityName == 'NYC') ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(amount){
  // Write your code here!
  let phrase = ''
  switch (amount) {
    case 'generous':
      phrase = 'Thank you so much.'
      break;
    case 'not as generous':
      phrase = 'Thank you.'
      break;
    default:
      phrase = 'Bye.'
  }
  return phrase
}