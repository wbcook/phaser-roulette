var PhaserRoulette = PhaserRoulette || {};

PhaserRoulette.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

PhaserRoulette.game.state.add('boot', PhaserRoulette.Boot);
PhaserRoulette.game.state.add('preload', PhaserRoulette.Preload);
PhaserRoulette.game.state.add('menu', PhaserRoulette.Menu);
PhaserRoulette.game.state.add('game', PhaserRoulette.Game);

PhaserRoulette.game.state.start('boot');
