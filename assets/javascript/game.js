// wait for html/css to load
$(document).ready(function() {
	// creating game as object
	var crystalCollector = {
		// points/values variables
		targetPoints: "",
		playerPoints: "",
		// empty random value array
		randomVals: [],
		// wins/losses
		wins: 0,
		losses: 0,
		// creating variables to rep jquery
		writeDOM: {
			targetScore: $("#targetScore"),
			yourScore: $("#yourScore"),
			playerWins: $("#wins"),
			playerLosses: $("#losses"),
			gemArray: [$("#amethyst"), $("#emerald"), $("#sapphire"), $("#ruby")],
			result: $("#result"),
		},
		// works as a start game and reset game function
		startGame: function() {
			// starting player point total at 0
			this.playerPoints = 0;
			// starting target points randomized between 19 and 120 
			this.targetPoints = Math.floor(Math.random() * 102) + 19;
			// loop to fill randomVals array with 4 random values and
			// giving a data attribute with those random value to the corresponding gem
			for (var i = 0; i < 4; i++) {
				this.randomVals[i] = Math.floor(Math.random() * 12) + 1;
				this.writeDOM.gemArray[i].attr("data-crystalvalue", this.randomVals[i]);
			}
			// writing scores, wins, losses, to DOM
			this.writeDOM.targetScore.text(this.targetPoints);
			this.writeDOM.yourScore.text(this.playerPoints);
			this.writeDOM.playerWins.text(this.wins);
			this.writeDOM.playerLosses.text(this.losses);
			// logging to ensure it works
			console.log("target: " + this.targetPoints + ", " + "amethyst val: "
						+ this.randomVals[0] + ", " + "emerald val: " + 
						this.randomVals[1] + ", " + "sapphire val: " + 
						this.randomVals[2] + ", " + "ruby val: " + 
						this.randomVals[3]);
		},
		// function for clicking on picture
		gemClicks: function() {
			// writing score to DOM for each click. see below on click event
			this.writeDOM.yourScore.text(this.playerPoints);
			// logging to ensure it works
			console.log("player points: " + crystalCollector.playerPoints);
		},
		// win/loss logic
		endGame: function() {
			// if player matches comp points, win, add 1 to wins, write they 
			// win, restart game
			if (this.playerPoints === this.targetPoints) {
				this.writeDOM.result.text("You win!!");
				this.wins++;
				this.writeDOM.playerWins.text(this.wins);
				this.startGame();
			  // if player exceeds comp points, lose, add 1 to losses, write 
			  // loss, restart game	
			} else if (this.playerPoints > this.targetPoints) {
				this.writeDOM.result.text("You lose.");
				this.losses++;
				this.writeDOM.playerLosses.text(this.Losses);
				this.startGame();
			}
		},
	};

	// starts the game on load
	crystalCollector.startGame();

	// crystal click event
	$(".crystalPics").on("click", function() {
		// create a new var equal to data-crystalval attribute of the 
		// button which was clicked
		var crystalVal = $(this).attr("data-crystalvalue");
		// make it an integer so that...
		crystalVal = parseInt(crystalVal);
		// ... it actually adds to points rather than adds to a string
		crystalCollector.playerPoints += crystalVal;
		// gemClicks function writes to DOM
		crystalCollector.gemClicks();
		// put in win/loss logic defined above
		crystalCollector.endGame();
	});

});