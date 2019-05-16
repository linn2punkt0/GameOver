class Tomato extends Phaser.Scene {
  constructor() {
    super({key:"Tomato"});
  }

  preload() {
    this.load.image('tomato', 'assets/images/tomato.png');
  }

  create() {
    const tomato = this.add.sprite(200, 450, 'tomato');
    tomato.setScale(.07);


    // this.key_Right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowRight);
    // cursors = this.input.keyboard.createCursorKeys();
  }

  // update() {
  //   if (cursors.left.isDown)
  //   {
  //       player.setVelocityX(-160);
  //
  //       player.anims.play('left', true);
  //   }
  //   else if (cursors.right.isDown)
  //   {
  //       player.setVelocityX(160);
  //
  //       player.anims.play('right', true);
  //   }
  //   else
  //   {
  //       player.setVelocityX(0);
  //
  //       player.anims.play('turn');
  //   }
  //
  //   if (cursors.up.isDown && player.body.touching.down)
  //   {
  //       player.setVelocityY(-330);
  //   }
  // }

}
