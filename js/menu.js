var PhaserRoulette = PhaserRoulette || {};

//title screen
PhaserRoulette.Menu = function(){};

PhaserRoulette.Menu.prototype = {
  init: function(score) {
    var score = score || 0;
    this.highestScore = this.highestScore || 0;

    this.highestScore = Math.max(score, this.highestScore);
   },
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'table');

    //give it speed in x
    // this.background.autoScroll(-20, 0);

    //start game text
    var text = "Tap to Spin!";
    var style = { font: "90px Helvetica", fill: "pink", align: "center" };
    var t = this.game.add.text(this.game.world.centerX, this.game.world.centerY, text, style);
    t.anchor.set(0.5);

    //highest score
    // text = "Highest score: "+this.highestScore;
    // style = { font: "15px Arial", fill: "#000", align: "center" };

    // var h = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 128, text, style);
    // h.anchor.set(0.5);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('game');
    }
  }
};
