import Phaser from "phaser";

export class Stage extends Phaser.Scene {
  keys: Phaser.Input.Keyboard.Key[];

  constructor() {
    super("Stage");
    this.keys = [];
  }

  preload() { }

  create() {
    this.add.image(400, 100, "logo");
    this.add.bitmapText(400, 200, "font", this.game.config.gameTitle).setOrigin(0.5);
    this.add.bitmapText(400, 300, "font", "We are in\nthe first stage").setOrigin(0.5).setTint(0x0000dd).setCenterAlign();
    this.keys["space"] = this.input.keyboard.addKey("SPACE");
  }

  update() {
    if (this.keys["space"].isDown) {
      console.log("Space pressed on Stage");
      this.scene.start("Main");
    }
  }
}
