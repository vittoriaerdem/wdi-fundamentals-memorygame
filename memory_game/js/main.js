console.log("Up and running!");
var cards = [
   {
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png",
   },
   {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png",
   },

   {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
   },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
   },
];

var cardsInPlay = [];

 function checkForMatch() {
  //if (cardsInPlay.length == 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
          //setTimeout('location', 50000);
        //location.reload()

      } else {
          alert("Sorry, try again");
        };

  };


function flipCard() {
    var cardId = this.getAttribute('data-id');
 //console.log("User flipped" + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
 this.setAttribute('src', cards[cardId].cardImage);
//console.log(cards[cardId].suit);
 if (cardsInPlay.length === 2){
    checkForMatch();
    //cardsInPlay = [];

 };
};

console.log(cardsInPlay);


 function createBoard() {
  const cardTable = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardTable.appendChild(cardElement);

  }
};

createBoard();