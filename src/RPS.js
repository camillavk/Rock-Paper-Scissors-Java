function Rules() {
	this.trumps = {
		"Rock" : "Scissors",
		"Scissors" : "Paper",
		"Paper" : "Rock"
	}
};

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

Rules.prototype.winningChoiceOf = function(choiceOne, choiceTwo) {
	if(choiceOne.type === choiceTwo.type)
		return new Draw;
	else if(this.trumps[choiceOne.type] === choiceTwo.type)
		return choiceOne;
	else
		return choiceTwo;
}

// {'Rock' : { 'beats' : 'Scissors' } }