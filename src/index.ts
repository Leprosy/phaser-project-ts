import Phaser from "phaser";
import { Main, Stage } from "./scenes/";

class SimpleGame {
  game: Phaser.Game;

  constructor() {
    this.game = new Phaser.Game({
      width: 800,
      height: 600,
      type: Phaser.AUTO,
      parent: "content",
      scene: [Main, Stage],
      title: "A Game",
      version: "0.1",
    });
  }
}

window.onload = () => {
  var game = new SimpleGame();
};
