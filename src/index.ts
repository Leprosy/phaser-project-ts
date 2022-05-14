import Phaser from "phaser";
import { Main, Stage } from "./scenes/";

console.log("ok", Phaser);

class SimpleGame {
  game: Phaser.Game;

  constructor() {
    this.game = new Phaser.Game({
      width: 800,
      height: 600,
      type: Phaser.AUTO,
      parent: "content",
      scene: [Main, Stage],
    });
  }
}

window.onload = () => {
  var game = new SimpleGame();
};
