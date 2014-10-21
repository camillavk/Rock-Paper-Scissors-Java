var game = new Game

	var gest = {Rock: new Rock, Paper: new Paper, Scissors: new Scissors, Spock: new Spock, Lizard: new Lizard};

function Winner(winner) {
	$('h2').text("The winner is " + winner);
}

var computersChoice = function() {
	var gestures = [new Rock, new Paper, new Scissors, new Lizard, new Spock];
	return gestures[Math.floor(Math.random()*gestures.length)]
};

$('img').on('click', function() {
		var choiceOne = gest[$(this).data('gesture')]
		var choiceTwo = computersChoice()
		var winner = game.winningChoiceOf(choiceOne, choiceTwo)
		Winner(winner.type)
});
