import Phaser from "phaser";

export class Main extends Phaser.Scene {
  constructor() {
    super("Main");
  }

  preload() {
    this.load.image("logo", "logo.png");
  }

  create() {
    const logo = this.add.image(400, 70, "logo");
    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: "Sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }
}
