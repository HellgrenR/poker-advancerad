import Dealer from "./dealer.js"
import Player from "./player.js"

export default class Game {

  players = []

  constructor() {
    this.dealer = new Dealer()
  }

  startGame(...names) {
    this.addPlayers(...names)
    
  }

  addPlayers(...names) {
    if (names.length < 2) {
      console.log("Du måste minst ha två spelare")
    } else {
      for (i = 0; i < names.length; i++) {
        this.players.push(new Player(names[i]))
      }
    }
  }

}








