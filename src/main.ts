import Phaser from "phaser";
import { Main } from "./scenes";

console.log("ok", Phaser);

class SimpleGame {
  game: Phaser.Game;

  constructor() {
    this.game = new Phaser.Game({
      width: 800,
      height: 600,
      type: Phaser.AUTO,
      parent: "content",
      scene: [Main],
    });
  }
}

window.onload = () => {
  var game = new SimpleGame();
};
