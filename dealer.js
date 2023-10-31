import Deck from "./deck.js"

export default class Dealer {

  constructor() {
    this.deck = new Deck()
  }

  giveFiveCards(player) {
    // ge 5 kort från _cards till spelaren
    let cards = this.deck.cards.splice(0, 5)
    player._hand.push(...cards)
  }

  giveTwoCards(player) {
    // ge 2 kort från _cards till spelaren
    let cards = this.deck.cards.splice(0, 2)
    player._hand.push(...cards)
  }

  randomizeCards() {
    for (let i = 0; i < this.deck.cards.length; i++) {
      const card = this.deck.cards.splice(Math.floor(Math.random() * this.deck.cards.length), 1)[0]
      this.deck.cards.push(card)
    }
  }

}












