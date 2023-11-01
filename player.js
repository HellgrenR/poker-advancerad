
export default class Player {

  #hand = []

  constructor(name) {
    this.name = name
  }

  set hand(hand) {
    this.#hand = hand
  }

  get hand() {
    return this.#hand
  }

  throwTwoCardsByIndex(board, index1, index2) {
    // Problem, tar bort första indexen och sedan skjuts listan ner ett steg och index2 missar
    let thrown1 = this.#hand.splice(index1, 1)
    let thrown2 = this.#hand.splice(index2, 1)

    board.throwAway.push(...thrown1.concat(thrown2))
  }

  throwAllCards(board) {
    let thrown = this.#hand.splice(0, this.#hand.length)
    board.throwAway.push(...thrown)
  }

}








