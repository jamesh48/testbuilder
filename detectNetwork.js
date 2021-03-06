// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  let twoDigits = cardNumber.slice(0, 2);

  //Switch
  if ((twoDigits === '49' || twoDigits === '56' || twoDigits === '67' || twoDigits + '33' === cardNumber.slice(0, 4) || twoDigits + '3110' === cardNumber.slice(0, 6)) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'Switch';
  } else if (twoDigits === '62' && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    return 'China UnionPay';
  } else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (twoDigits === '63' || twoDigits === '50')) {
    return 'Maestro';
  } else if ((twoDigits === '60' || twoDigits === '64' || twoDigits === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  } else if (twoDigits[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  } else if ((twoDigits === '51' || twoDigits === '52' || twoDigits === '53' || twoDigits === '54' || twoDigits === '55') && cardNumber.length === 16) {
    return 'MasterCard';
  } else if (cardNumber.length === 14 && (twoDigits === '38' || twoDigits === '39')) {
    return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && (twoDigits === '34' || twoDigits === '37')) {
    return 'American Express';
  } else {
    return 'error';
  }

  //Overlaps with Maestro -63
  //Overlaps with Visa -4
  //Length 16, 18, 19

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};




