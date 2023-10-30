import Deck from "./deck.js"

export default class Board extends Deck {

  _players = []
  _throwAway = []

  set players(players) {
    this._players = players
  }

  get players() {
    return this._players
  }

  set throwAway(throwAway) {
    this._throwAway = throwAway
  }

  get throwAway() {
    return this._throwAway
  }

  constructor() {
    super()
  }

  addThrowAwayToCards() {
    // lägg alla kort i _throwAway i _cards
    let cards = this._throwAway.splice(0, this._throwAway.length)
    this._cards.push(...cards)
  }

}










