$(document).ready(function() {

	var crystalCollector = {
		targetPoints: "",
		playerPoints: "",
		rubyValue: "",
		emeraldValue: "",
		sapphireValue: "",
		amethystValue: "",
		wins: 0,
		losses: 0,
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
		startGame: function() {
			this.playerPoints = 0;
			this.targetPoints = Math.floor(Math.random() * 102) + 19;
			this.rubyValue = Math.floor(Math.random() * 12) + 1;
			this.emeraldValue = Math.floor(Math.random() * 12) + 1;
			this.sapphireValue = Math.floor(Math.random() * 12) + 1;
			this.amethystValue = Math.floor(Math.random() * 12) + 1;
			this.writeDOM.targetScore.text(this.targetPoints);
			this.writeDOM.yourScore.text(this.playerPoints);
			this.writeDOM.playerWins.text(this.wins);
			this.writeDOM.playerLosses.text(this.losses);
			this.writeDOM.ruby.attr("data-crystalvalue", 
				this.rubyValue);
			this.writeDOM.emerald.attr("data-crystalvalue", 
				this.emeraldValue);
			this.writeDOM.sapphire.attr("data-crystalvalue", 
				this.sapphireValue);
			this.writeDOM.amethyst.attr("data-crystalvalue", 
				this.amethystValue);
			console.log("target: " + this.targetPoints + ", " + "ruby val: " + this.rubyValue + ", " 
						+ "emerald val: " + this.emeraldValue + ", " + "sapphire val: " 
						+ this.sapphireValue + ", " + "amethyst val: " + this.amethystValue);
		},
		gemClicks: function() {
			this.writeDOM.yourScore.text(this.playerPoints);
			console.log("player points: " + crystalCollector.playerPoints);
		},
		endGame: function() {
			if (this.playerPoints === this.targetPoints) {
				this.writeDOM.result.text("You win!!");
				this.wins++;
				this.writeDOM.playerWins.text(this.wins);
				this.startGame();
			} else if (parseInt(this.playerPoints) > this.targetPoints) {
				this.writeDOM.result.text("You lose.");
				this.losses++;
				this.writeDOM.playerLosses.text(this.Losses);
				this.startGame();
			}
		},
	};

	crystalCollector.startGame();

	$(".crystalPics").on("click", function() {
		var crystalVal = $(this).attr("data-crystalvalue");
		crystalVal = parseInt(crystalVal);
		crystalCollector.playerPoints += crystalVal;
		crystalCollector.gemClicks();
		crystalCollector.endGame();
	});

});