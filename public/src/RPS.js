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


Game.prototype.winningChoiceOf = function(choiceOne, choiceTwo) {
	if(this.PAIRS[choiceOne.type][choiceTwo.type] != undefined)
		return choiceOne;
	else
		return choiceTwo;
};

Game.prototype.winningVerb = function(choiceOne, choiceTwo) {
	return this.PAIRS[choiceOne][choiceTwo]
};

Game.prototype.PAIRS = {
	"Rock": { "Scissors": 'blunts', "Lizard": 'crushes' , "Rock": 'draws with'},
	"Paper": { "Rock": 'covers', "Spock": 'disproves', "Paper": 'draws with' },
	"Scissors": { "Paper": 'cuts', "Lizard": 'decapitates', "Scissors": 'draws with' },
	"Lizard": { "Spock": 'poisons', "Paper": 'eats', "Lizard": 'draws with' },
	"Spock": { "Scissors": 'smashes', "Rock": 'vapourizes', "Spock": 'draws with' }
};
