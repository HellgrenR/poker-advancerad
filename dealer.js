import Deck from "./deck.js"

export default class Dealer extends Deck {

  constructor() {
    super()
  }

  giveFiveCards(player) {
    // ge 5 kort från _cards till spelaren
    let cards = this._cards.splice(0, 5)
    player._hand.push(...cards)
  }

  giveTwoCards(player) {
    // ge 2 kort från _cards till spelaren
    let cards = this._cards.splice(0, 2)
    player._hand.push(...cards)
  }

}












