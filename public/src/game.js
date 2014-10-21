var game = new Game

	var gest = {Rock: new Rock, Paper: new Paper, Scissors: new Scissors, Spock: new Spock, Lizard: new Lizard};

function Message(winner, loser) {
	console.log(winner)
	console.log(loser)
	$('h2').text(winner.type + " " + game.winningVerb(winner.type, loser.type) + " " + loser.type)
}

var computersChoice = function() {
	var gestures = [new Rock, new Paper, new Scissors, new Lizard, new Spock];
	return gestures[Math.floor(Math.random()*gestures.length)]
};

$('img').on('click', function() {
		var choiceOne = gest[$(this).data('gesture')]
		var choiceTwo = computersChoice()
		var winner = game.winningChoiceOf(choiceOne, choiceTwo)
		if (winner === choiceOne) {var loser = choiceTwo}
		else {var loser = choiceOne}
		Message(winner, loser)
});

