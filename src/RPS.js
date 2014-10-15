function Rules() {};
function Rock() {
	this.type = "Rock"
};
function Scissors() {
	this.type = "Scissors"
};
function Paper() {
	this.type = "Paper"
};

Rules.prototype.winningChoiceOf = function(choiceOne, choiceTwo) {
	if((choiceOne.type === 'Rock' && choiceTwo.type === 'Scissors')||(choiceOne.type === 'Scissors' && choiceTwo.type === 'Paper'))
	return choiceOne
	else if ((choiceOne.type === 'Scissors' && choiceTwo.type === 'Rock')||(choiceOne.type === 'Paper' && choiceTwo.type === 'Scissors'))
	return choiceTwo	
};