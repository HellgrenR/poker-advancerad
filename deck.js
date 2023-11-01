
export default class Deck {

 #cards = []

  constructor() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

    for (const suit of suits) {
      for (const rank of ranks) {
        this.#cards.push({
          name: `${rank} of ${suit}`,
          rank: rank,
          suit: suit
        })
      }
    }
  }

  get cards() {
    return this.#cards
  }

}








