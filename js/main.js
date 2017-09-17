



var cards = [

	{
		rank : "queen",
		suit : "hearts",
		cardImage: "images/queen-of-hearts.png",

	},

	{
		rank : "queen",
		suit :  "diamonds",
		cardImage: "images/queen-of-diamonds.png",

	},
	{
		rank : "king",
		suit :"hearts",
		cardImage:"images/king-of-hearts.png",

	},

	{
		rank : "king",
		suit :"diamonds",
		cardImage:"images/king-of-diamonds.png",

	},

];


var cardsInPlay = [];
var gameScore = 0;

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match!");
		gameScore ++;
		document.getElementById("trackScore").innerHTML= gameScore;
	}else{
		alert("sorry, try again");
	}

};


 var flipCard = function(){
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank );
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);

	if(cardsInPlay.length === 2){
		checkForMatch();
	}
};


 var createBoard= function(){
	for(var i=0; i < cards.length; i++){
		var cardElement= document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};


createBoard();


var resetGame = function(){

	// delete cards in cardsInPlay array
	for(i = cardsInPlay.length; i> 0; i--){
		cardsInPlay.pop();
	}

	// get rid of the current board
	var meset = document.getElementById("game-board");
	meset.remove();

	// because we removed the div "game-board" we need to recreate it so the createBoard() can be executed.
	var newD = document.createElement("div");
	newD.setAttribute("id", "game-board");
	newD.setAttribute("class", "board clearfix");
	document.getElementById("mainTag").appendChild(newD);


	// create the new board
	createBoard();

}

gameScore=[];


console.log(gameScore);
