describe('Rock Paper Scissors', function() {

	describe('types of gestures', function() {

		it('Rock', function() {
			rock = new Rock
			expect(rock.type).toEqual('Rock');
		});

		it('Scissors', function() {
			scissors = new Scissors
			expect(scissors.type).toEqual('Scissors');
		});

		it('Paper', function() {
			paper = new Paper
			expect(paper.type).toEqual('Paper');
		});

		it('Spock', function() {
			spock = new Spock
			expect(spock.type).toEqual('Spock');
		});

		it('Lizard', function() {
			lizard = new Lizard
			expect(lizard.type).toEqual('Lizard');
		});

	});

	describe('rules of the game', function() {

		beforeEach(function() {
			game = new Game
			rock = new Rock
			scissors = new Scissors
			paper = new Paper
			spock = new Spock
			lizard = new Lizard
			draw = new Draw
		});

		it('Rock beats Scissors', function() {
			expect(game.winningChoiceOf(rock, scissors)).toEqual(rock);
		});

		it('Scissors are beaten by Rock', function() {
			expect(game.winningChoiceOf(scissors, rock)).toEqual(rock);
		});

		it('Paper beats Rock', function() {
			expect(game.winningChoiceOf(paper, rock)).toEqual(paper);
		});

		it('Scissors draws with Scissors', function() {
			expect(game.winningChoiceOf(scissors, scissors)).toEqual(draw);
		});

		it('Spock beats Scissors', function() {
			expect(game.winningChoiceOf(spock, scissors)).toEqual(spock);
		});

		it('Lizard is beaten by Rock', function() {
			expect(game.winningChoiceOf(lizard, rock)).toEqual(rock);
		});

	});

});