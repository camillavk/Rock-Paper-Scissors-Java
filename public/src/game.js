var game = new Game

	var gest = {Rock: new Rock, Paper: new Paper, Scissors: new Scissors, Spock: new Spock, Lizard: new Lizard};

// var computer = function() {
// 	var gestures = [new Rock, new Paper, new Scissors, new Spock, new Lizard];
// 	return gestures[Math.floor(Math.random()*gestures.length)]
// };

function Winner(winner) {
	$('h2').text("The winner is " + winner);
}

// var playersChoice = gest[$(this).data('gesture')]

var computersChoice = function() {
	var gestures = [new Rock, new Paper, new Scissors, new Lizard, new Spock];
	return gestures[Math.floor(Math.random()*gestures.length)]
};

$('img').on('click', function() {
		// console.log($(this).data('gesture'))
		// console.log(gest[$(this).data('gesture')])
		var choiceOne = gest[$(this).data('gesture')]
		// console.log(choiceOne.type)
		var choiceTwo = computersChoice()
		// console.log(choiceTwo.type)
		// var winner = function() {}
		// console.log(game.winningChoiceOf(choiceOne, choiceTwo))
		var winner = game.winningChoiceOf(choiceOne, choiceTwo)
		console.log(winner)
		Winner(winner.type)


	// winner(game.winningChoiceOf(console.log((gest[$(this).data('gesture')]), computersChoice())))
});

// $('img').on('click', function() {alert("Cat")});