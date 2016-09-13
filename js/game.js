var PhaserRoulette = PhaserRoulette || {};

//title screen
PhaserRoulette.Game = function(){};

PhaserRoulette.Game.prototype = {
  create: function() {
  	//set world dimensions
    // this.game.world.setBounds(0, 0, 1920, 1920);

    //background
    this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'table');

    this.friends = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 310, 'friends');
    this.friends.anchor.setTo(0.5);

    this.wheel = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'wheel');
    this.wheel.anchor.setTo(0.5);

    // //sounds
    this.spinnerSound = this.game.add.audio('spinner');
    this.coinSound = this.game.add.audio('coin');

    // timer
     this.game.time.events.add(Phaser.Timer.SECOND * 5, this.hitBlock, this);

    // this.playerPrize = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'playerPrize');
    // this.playerPrize.anchor.setTo(0.5);
    //
    // //create player
    // this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'playership');
    // this.player.scale.setTo(2);
    // this.player.animations.add('fly', [0, 1, 2, 3], 5, true);
    // this.player.animations.play('fly');
    //
    // //player initial score of zero
    // this.playerScore = 0;
    //
    // //enable player physics
    // this.game.physics.arcade.enable(this.player);
    // this.playerSpeed = 120;
    // this.player.body.collideWorldBounds = true;
    //
    // //generate game elements
    this.generatePrizes();
    this.spinWheel();
    //
    // //show score
    // this.showLabels();
    //
  },
  update: function() {

    if(this.game.input.activePointer.justPressed()) {
      this.gameOver();
    }
    // if(this.game.input.activePointer.justPressed()) {
    //
    //   //move on the direction of the input
    //   this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
    // }
    //
    // //collision between player and asteroids
    // this.game.physics.arcade.collide(this.player, this.asteroids, this.hitAsteroid, null, this);
    //
    // //overlapping between player and collectables
    // this.game.physics.arcade.overlap(this.player, this.collectables, this.collect, null, this);
  },
  generatePrizes: function() {
    // create a group for the prize so they can move together
    this.prizes = this.game.add.group();

    //enable physics in them
    this.prizes.enableBody = true;
    this.prizes.physicsBodyType = Phaser.Physics.ARCADE;

    // set the number of prizes in the pool
    var numPrizes = 100;
    var prize;

    for (var i = 0; i < numPrizes; i++) {
      // default random prize
      var rndPrizeChoice = 'playerPrize';
      // random prize number
      var rndPrizeChance = this.game.rnd.integerInRange(0, 100);
      if (rndPrizeChance >= 100) {
        rndPrizeChoice = 'playerPrize6';
      } else if (rndPrizeChance >= 95) {
        rndPrizeChoice = 'playerPrize5';
      } else if (rndPrizeChance >= 90) {
        rndPrizeChoice = 'playerPrize4';
      } else if (rndPrizeChance >= 80) {
        rndPrizeChoice = 'playerPrize3';
      } else if (rndPrizeChance >= 40) {
        rndPrizeChoice = 'playerPrize2';
      } else {
        rndPrizeChoice = 'playerPrize';
      }
      //add prizes to the wheel
      prize = this.prizes.create(this.game.world.centerX - 125 * i, this.game.world.centerY, rndPrizeChoice);
      prize.scale.set(0.5, 0.5);
      prize.anchor.setTo(0.5);
    }

    this.block = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'block');
    this.block.scale.set(0.2, 0.2);
    this.block.anchor.setTo(0.5);

  },
  generateAsteriods: function() {
    // this.asteroids = this.game.add.group();
    //
    // //enable physics in them
    // this.asteroids.enableBody = true;
    //
    // //phaser's random number generator
    // var numAsteroids = this.game.rnd.integerInRange(150, 200)
    // var asteriod;
    //
    // for (var i = 0; i < numAsteroids; i++) {
    //   //add sprite
    //   asteriod = this.asteroids.create(this.game.world.randomX, this.game.world.randomY, 'rock');
    //   asteriod.scale.setTo(this.game.rnd.integerInRange(10, 40)/10);
    //
    //   //physics properties
    //   asteriod.body.velocity.x = this.game.rnd.integerInRange(-20, 20);
    //   asteriod.body.velocity.y = this.game.rnd.integerInRange(-20, 20);
    //   asteriod.body.immovable = true;
    //   asteriod.body.collideWorldBounds = true;
    // }
  },
  hitBlock: function() {
    // //play explosion sound
    // //this.explosionSound.play();
    this.game.add.tween(this.block).to( { y: 200 }, 1000, Phaser.Easing.Bounce.Out, true);
    this.coinSound.play('',0,0.1);
    //
    // //make the player explode
    // var emitter = this.game.add.emitter(this.player.x, this.player.y, 100);
    // emitter.makeParticles('playerParticle');
    // emitter.minParticleSpeed.setTo(-200, -200);
    // emitter.maxParticleSpeed.setTo(200, 200);
    // emitter.gravity = 0;
    // emitter.start(true, 1000, null, 100);
    // this.player.kill();
    //
    // this.game.time.events.add(800, this.gameOver, this);
  },
  gameOver: function() {
    //pass it the score as a parameter
    // this.game.state.start('menu', true, false, this.playerScore);
    this.spinnerSound.stop();
    this.coinSound.stop();
    this.game.state.start('menu');
  },
  spinWheel: function(player, collectable) {

    this.game.add.tween(this.prizes).to( { x: 10000 }, 5000, Phaser.Easing.Cubic.Out, true);
    // TODO Tween prizes.
    //play spinner sound
    this.spinnerSound.play('',0,0.6);
    //
    // //update score
    // this.playerScore++;
    // this.scoreLabel.text = this.playerScore;
    //
    // //remove sprite
    // collectable.destroy();
  },
  showLabels: function() {
  //   //score text
  //   var text = "0";
  //   var style = { font: "20px Arial", fill: "#fff", align: "center" };
  //   this.scoreLabel = this.game.add.text(this.game.width-50, this.game.height - 50, text, style);
  //   this.scoreLabel.fixedToCamera = true;
  }
};
