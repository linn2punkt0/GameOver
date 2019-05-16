
const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {y: 200},
        debug: false
      }
    },
    scene: [ Tomato, World]
    // create: create,
    // preload: preload,
    // update: update
};

var game = new Phaser.Game(config);
