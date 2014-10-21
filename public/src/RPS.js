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

function Spock() {
	this.type = "Spock"
};

function Lizard() {
	this.type = "Lizard"
};

function Draw() {
	this.type = "Draw"
};

Game.prototype.winningChoiceOf = function(choiceOne, choiceTwo) {
	if(choiceOne.type === choiceTwo.type)
		return new Draw;
	else if(this.PAIRS[choiceOne.type][choiceTwo.type] != undefined)
		return choiceOne;
	else
		return choiceTwo;
};

Game.prototype.PAIRS = {
	"Rock": { "Scissors": 'blunts', "Lizard": 'crushes' },
	"Paper": { "Rock": 'covers', "Spock": 'disproves' },
	"Scissors": { "Paper": 'cuts', "Lizard": 'decapitates' },
	"Lizard": { "Spock": 'poisons', "Paper": 'eats' },
	"Spock": { "Scissors": 'smashes', "Rock": 'vapourizes' }
};
