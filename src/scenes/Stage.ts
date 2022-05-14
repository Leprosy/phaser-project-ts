import Phaser from "phaser";
import { textStyles } from "../constants/styles";

export class Stage extends Phaser.Scene {
  keys: Phaser.Input.Keyboard.Key[];

  constructor() {
    super("Stage");
    this.keys = [];
  }

  preload() {}

  create() {
    const text = this.add.text(100, 400, "We are in the first Stage", textStyles.debug);
    this.keys["space"] = this.input.keyboard.addKey("SPACE");
  }

  update() {
    if (this.keys["space"].isDown) {
      console.log("Space pressed on Stage");
      this.scene.start("Main");
    }
  }
}
