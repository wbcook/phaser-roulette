var PhaserRoulette = PhaserRoulette || {};

//loading the game assets
PhaserRoulette.Preload = function(){};

PhaserRoulette.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    // A "preload" sprite will have its width or height crop adjusted
    // based on the percentage of the loader in real-time.
    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.image('table', 'assets/images/table.png');
    this.load.image('wheel', 'assets/images/wheel.png');
    this.load.image('friends', 'assets/images/mario-friends.png');
    this.load.image('block', 'assets/images/question-block.png');
    // this.load.spritesheet('playership', 'assets/images/player.png', 12, 12);
    // this.load.spritesheet('power', 'assets/images/power.png', 12, 12);
    this.load.image('playerPrize', 'assets/images/player-prize.png');
    this.load.image('playerPrize2', 'assets/images/player-prize2.png');
    this.load.image('playerPrize3', 'assets/images/player-prize3.png');
    this.load.image('playerPrize4', 'assets/images/player-prize4.png');
    this.load.image('playerPrize5', 'assets/images/player-prize5.png');
    this.load.image('playerPrize6', 'assets/images/player-prize6.png');
    this.load.audio('spinner', 'assets/audio/spinner.ogg');
    this.load.audio('coin', 'assets/audio/coin.ogg');
  },
  create: function() {
    this.state.start('menu');
  }
};
