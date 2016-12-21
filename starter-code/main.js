console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
	alert ("It's a match");
}
else if (cardTwo === cardThree) {
	alert ("It's a match");
}
else if (cardTwo === cardTwo) {
	alert ("It's a match");
}
else if (cardThree === cardThree) {
	alert ("It's a match");
}
else {
	alert ("No match found");
}

var parent = document.getElementById('game-board');

var createCards = function() {
	for (i=1; i<5; i++) {
		var newListItem = document.createElement('div');
    	newListItem.className = "card";
    	newListItem.innerHTML = "new";
    	parent.appendChild(newListItem);

	}
};

createCards();