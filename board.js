import Deck from "./deck.js"

export default class Board extends Deck {

  #players = []
  #throwAway = []

  get throwAway() {
    return this.#throwAway
  }

  set players(players) {
    this.#players = players
  }

  get players() {
    return this.#players
  }

  set throwAway(throwAway) {
    this.#throwAway = throwAway
  }

  get throwAway() {
    return this.#throwAway
  }

  constructor() {
    super()
  }

  addThrowAwayToCards() {
    // lägg alla kort i #throwAway i #cards
    let card = this.#throwAway.splice(0, this.#throwAway.length)
    this.cards.push(...card)
  }

}










