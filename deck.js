
export default class Deck {

  constructor() {
    this._cards = []
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

    for (const suit of suits) {
      for (const rank of ranks) {
        this._cards.push({
          name: `${rank} of ${suit}`,
          rank: rank,
          suit: suit
        })
      }
    }
  }

  get cards() {
    return this._cards
  }

  randomizeCards() {
    for (let i = 0; i < this._cards.length; i++) {
      const card = this._cards.splice(Math.floor(Math.random() * this._cards.length), 1)[0]
      this._cards.push(card)
    }
  }

}








