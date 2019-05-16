class Example1 extends Phaser.Scene {
  constructor() {
    super({key:"Example1"});
  }

  preload() {
    this.load.image('tomato', 'assets/images/tomato.png');
  }

  create() {
    this.tomato = this.game.add.sprite(400, 300, 'tomato');

  }
}
