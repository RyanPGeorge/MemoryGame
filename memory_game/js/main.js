console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else alert("Sorry, try again.")
  /*  // Code to be executed if condition1 is false and condition2 is true
   } else if (condition3) {
    // Code to be executed if condition1 and condition2 are false and condition3 is true
   } else {
   // Code to be executed if condition1, condition2, and condition3 are false
   } */