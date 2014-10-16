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

	});

	describe('rules of the game', function() {

		beforeEach(function() {
			rules = new Rules
			rock = new Rock
			scissors = new Scissors
			draw = new Draw
		});

		it('Rock beats Scissors', function() {
			expect(rules.winningChoiceOf(rock, scissors)).toEqual(rock);
		});

		it('Scissors are beaten by Rock', function() {
			expect(rules.winningChoiceOf(scissors, rock)).toEqual(rock);
		});

		it('Paper beats Rock', function() {
			expect(rules.winningChoiceOf(paper, rock)).toEqual(paper);
		});

		it('Scissors draws with Scissors', function() {
			expect(rules.winningChoiceOf(scissors, scissors)).toEqual(draw);
		});

	});

});