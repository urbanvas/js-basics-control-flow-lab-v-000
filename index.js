// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let statement = ''
  if (someValue < 2500) {
    statement = 'No can do.'
  } else if (someValue < 2000) {
    statement = 'I will gladly take your thirty bucks.'
  } else if (someValue <= 400) {
    statement = 'This one is on me!'
  }
  return statement
}
