// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the cardNumber.substr(0,2))
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  // if string is 38 or 39 and is 14 digits long, then return "Diner's Club"
  // if string is 34 or 37 and is 15 digits long, then return "American Express"
  
  var cardLength = cardNumber.length
  var type
  
  if (cardLength === 12) {
    if (/^50(18|20|38)/.test(cardNumber)) {
      type = "Maestro"
    } else if (/^6304/.test(cardNumber)) {
      type = "Maestro"
    }
  }
  
  if (cardLength === 13) {
    if (/^4/.test(cardNumber)) {
      type = "Visa"
    } else if (/^50(18|20|38)/.test(cardNumber)) {
      type = "Maestro"
    } else if (/^6304/.test(cardNumber)) {
      type = "Maestro"
    }
    
    
  } else if (cardLength === 14) {
    if (/^3[8-9]/.test(cardNumber)) {
      type = "Diner's Club"
    } else if (/^50(18|20|38)/.test(cardNumber)) {
      type = "Maestro"
    } else if (/^6304/.test(cardNumber)) {
      type = "Maestro"
    }
    
    
  } else if (cardLength === 15) {
    if (/^3[47]/.test(cardNumber)) {
      type = "American Express"
    } else if (/^50(18|20|38)/.test(cardNumber)) {
      type = "Maestro"
    } else if (/^6304/.test(cardNumber)) {
      type = "Maestro"
    }

//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
//Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
    
  } else if (cardLength === 16) {
    
    if (/^49(03|05|11|36)/.test(cardNumber)) {
      type = "Switch"
    } else if (/^564182/.test(cardNumber)) {
      type = "Switch"
    } else if (/^633110/.test(cardNumber)) {
      type = "Switch"
    } else if (/^6333/.test(cardNumber)) {
      type = "Switch"
    } else if (/^6759/.test(cardNumber)) {
      type = "Switch"
    } else if (/^4/.test(cardNumber)) {
      type = "Visa"
    } else if (/^50(18|20|38)/.test(cardNumber)) {
      type = "Maestro"
    } else if (/^5[1-5]/.test(cardNumber)) {
      type = "MasterCard"
    } else if (/^6011/.test(cardNumber)) {
      type = "Discover"
    } else if (cardNumber.substr(0,6) >= 622126 && cardNumber.substr(0,6) <= 622925) {
      type = "China UnionPay"
    } else if (/^62[4-6]/.test(cardNumber)) {
      type = "China UnionPay"
    } else if (/^628[2-8]/.test(cardNumber)) {
      type = "China UnionPay"
    } else if (/^6304/.test(cardNumber)) {
      type = "Maestro"
    } else if (/^64[4-9]/.test(cardNumber)) {
      type = "Discover"
    } else if (/^65/.test(cardNumber)) {
      type = "Discover"
    }
    
    
  } else if (cardLength === 17) {
    if (/^50(18|20|38)/.test(cardNumber)) {
      type = "Maestro"
    } else if (cardNumber.substr(0,6) >= 622126 && cardNumber.substr(0,6) <= 622925) {
      type = "China UnionPay"
    } else if (/^62[4-6]/.test(cardNumber)) {
      type = "China UnionPay"
    } else if (/^628[2-8]/.test(cardNumber)) {
      type = "China UnionPay"
    } else if (/^6304/.test(cardNumber)) {
      type = "Maestro"
    }
    
  } else if (cardLength === 18) {
    if (/^49(03|05|11|36)/.test(cardNumber)) {
      type = "Switch"
    } else if (/^50(18|20|38)/.test(cardNumber)) {
      type = "Maestro"
    } else if (/^564182/.test(cardNumber)) {
      type = "Switch"
    } else if (cardNumber.substr(0,6) >= 622126 && cardNumber.substr(0,6) <= 622925) {
      type = "China UnionPay"
    } else if (/^62[4-6]/.test(cardNumber)) {
      type = "China UnionPay"
    } else if (/^628[2-8]/.test(cardNumber)) {
      type = "China UnionPay"
    } else if (/^6304/.test(cardNumber)) {
      type = "Maestro"
    } else if (/^633110/.test(cardNumber)) {
      type = "Switch"
    } else if (/^6333/.test(cardNumber)) {
      type = "Switch"
    } else if (/^6759/.test(cardNumber)) {
      type = "Switch"
    }
    
    
  } else if (cardLength === 19) {
    if (/^49(03|05|11|36)/.test(cardNumber)) {
      type = "Switch"
    } else if (/^4/.test(cardNumber)) {
      type = "Visa"
    } else if (/^50(18|20|38)/.test(cardNumber)) {
      type = "Maestro"
    } else if (/^564182/.test(cardNumber)) {
      type = "Switch"
    } else if (/^6011/.test(cardNumber)) {
      type = "Discover"
    } else if (/^628[2-8]/.test(cardNumber)) {
      type = "China UnionPay"
    } else if (/^6304/.test(cardNumber)) {
      type = "Maestro"
    } else if (/^633110/.test(cardNumber)) {
      type = "Switch"
    } else if (/^6333/.test(cardNumber)) {
      type = "Switch"
    } else if (/^64[4-9]/.test(cardNumber)) {
      type = "Discover"
    } else if (/^65/.test(cardNumber)) {
      type = "Discover"
    } else if (/^6759/.test(cardNumber)) {
      type = "Switch"
    } else if (cardNumber.substr(0,6) >= 622126 && cardNumber.substr(0,6) <= 622925) {
      type = "China UnionPay"
    } else if (/^62[4-6]/.test(cardNumber)) {
      type = "China UnionPay"

    }
  }
  
  return type
  
};

//okay it's time to refractor
//refractor by length, then prefix

//if length is....
  //if prefix is...

//do i want to try regex?

console.log(detectNetwork('6221261234567890'))
