class Tomato extends Phaser.Scene {
  constructor() {
    super({key:"Tomato"});
  }

  create()
  {
    const ground;
    ground = this.physics.add.staticGroup();
    ground.create(400, 568, 'ground').setScale(2).refreshBody();
  }
}
