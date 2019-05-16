
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// scene: [Example1]
var game = new Phaser.Game(config);

function preload () {
    this.load.image('tomato', 'assets/images/tomato.png');
  }

function create () {
  this.add.sprite(400, 300, 'tomato');
}

function update () {

}