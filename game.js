import Dealer from "./dealer.js"
import Player from "./player.js"
import Valid from "./validation.js"

export default class Game {

  players = []

  constructor() {
    this.dealer = new Dealer()
  }

  startGame(...names) {
    this.addPlayers(...names)

    this.dealer.randomizeCards()

    for (let i = 0; i < this.players.length; i++) {
      this.dealer.giveFiveCards(this.players[i])
      Valid.validate(this.players[i])
    }
  }

  addPlayers(...names) {
    if (names.length < 2) {
      console.log("Du måste minst ha två spelare")
    } else {
      for (let i = 0; i < names.length; i++) {
        this.players.push(new Player(names[i]))
      }
    }
  }
Test
}








