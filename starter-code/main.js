var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var createBoard = function() {
	for (i=0; i<cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		document.getElementById("game-board").appendChild(newCard);
	}
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='https://a.fsdn.com/con/app/proj/vector-cards/screenshots/KH.png'>";
	} else {
		this.innerHTML = "<img src='http://www.cruise-international.com/wp-content/uploads/2010/11/queen-elizabeth-II.jpg'>";
	}
	if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
	}
};
var isMatch = function(inP) {
  if (inP[0] === inP[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

createBoard();
console.log('booyah');