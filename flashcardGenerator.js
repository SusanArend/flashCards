//Establishing two types of flashcards
var BasicCard = require("./basiccard.js");
var ClozeCard = require("./clozecard.js");

//Select either basic or cloze card
var cardType = process.argv[2];
var cardSide = process.argv[3];

var basicCard1 = new BasicCard("Who was the first president of the US?", "George Washington");
var clozeCard1 = new ClozeCard("George Washington was the first president of the US", "George Washington");

//If basic card is selected, show either front of card or back of card according to user input
if (cardType === "basic") {
	if (cardSide === "front") {
		basicCard1.showFront();
	} else {
		basicCard1.showBack();
	}

//otherwise...
} else {

//if cloze card is selected, show either the cloze or partial depending on user input	
	if (cardSide === "cloze") {
		clozeCard1.showCloze();
	
	} else if (cardSide === "partial") {
		clozeCard1.partial();
	
	} else {
		clozeCard1.displayAns();
	}
}