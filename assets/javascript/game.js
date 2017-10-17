// wait for html/css to load
$(document).ready(function() {
	// creating game as object
	var crystalCollector = {
		// initializing points/values variables
		targetPoints: "",
		playerPoints: "",
		rubyValue: "",
		emeraldValue: "",
		sapphireValue: "",
		amethystValue: "",
		// wins/losses
		wins: 0,
		losses: 0,
		// creating variables to rep jquery
		writeDOM: {
			targetScore: $("#targetScore"),
			yourScore: $("#yourScore"),
			playerWins: $("#wins"),
			playerLosses: $("#losses"),
			ruby: $("#ruby"),
			emerald: $("#emerald"),
			sapphire: $("#sapphire"),
			amethyst: $("#amethyst"),
			result: $("#result"),
		},
		// works as a start game and reset game function
		startGame: function() {
			// starting player point total at 0
			this.playerPoints = 0;
			// starting target points randomized between 19 and 120 
			this.targetPoints = Math.floor(Math.random() * 102) + 19;
			// starting values for each of 4 crystals. random # b/w 1-12
			this.rubyValue = Math.floor(Math.random() * 12) + 1;
			this.emeraldValue = Math.floor(Math.random() * 12) + 1;
			this.sapphireValue = Math.floor(Math.random() * 12) + 1;
			this.amethystValue = Math.floor(Math.random() * 12) + 1;
			// writing scores, wins, losses, to DOM
			this.writeDOM.targetScore.text(this.targetPoints);
			this.writeDOM.yourScore.text(this.playerPoints);
			this.writeDOM.playerWins.text(this.wins);
			this.writeDOM.playerLosses.text(this.losses);
			// assigning each picture a data crystal val attribute = to 
			// the starting vals of crystals
			this.writeDOM.ruby.attr("data-crystalvalue", 
				this.rubyValue);
			this.writeDOM.emerald.attr("data-crystalvalue", 
				this.emeraldValue);
			this.writeDOM.sapphire.attr("data-crystalvalue", 
				this.sapphireValue);
			this.writeDOM.amethyst.attr("data-crystalvalue", 
				this.amethystValue);
			// logging to ensure it works
			console.log("target: " + this.targetPoints + ", " + "ruby val: "
						+ this.rubyValue + ", " + "emerald val: " + 
						this.emeraldValue + ", " + "sapphire val: " + 
						this.sapphireValue + ", " + "amethyst val: " + 
						this.amethystValue);
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
			} else if (parseInt(this.playerPoints) > this.targetPoints) {
				this.writeDOM.result.text("You lose.");
				this.losses++;
				this.writeDOM.playerLosses.text(this.Losses);
				this.startGame();
			}
		},
	};

	// starts the game on load
	crystalCollector.startGame();

	// button click event
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