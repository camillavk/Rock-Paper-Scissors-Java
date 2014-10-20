// function Rules() {
// 	this.trumps = {
// 		"Rock" : "Scissors",
// 		"Scissors" : "Paper",
// 		"Paper" : "Rock"
// 	}
// };

function Game() {};

function Rock() {
	this.type = "Rock"
};

function Scissors() {
	this.type = "Scissors"
};

function Paper() {
	this.type = "Paper"
};

function Draw() {};

Game.prototype.winningChoiceOf = function(choiceOne, choiceTwo) {
	if(choiceOne.type === choiceTwo.type)
		return new Draw;
	else if(this.PAIRS[choiceOne.type][choiceTwo.type] != undefined)
		return choiceOne;
	else
		return choiceTwo;
};

Game.prototype.PAIRS = {
	"Rock": { "Scissors": 'blunts' },
	"Paper": { "Rock": 'covers' },
	"Scissors": { "Paper": 'cuts' }
};

// Game.prototype.winningChoiceOf = function(choiceOne, choiceTwo) {
// 	if(choiceOne
// };

// {'Rock' : { 'beats' : 'Scissors' } }