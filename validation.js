
export default class Valid {

  static validate(player) {
    let result = []
    for (let card of player.hand) {
      if (card.rank > 1 && card.rank < 11) {
        result.push(card.rank)
      } else if (card.rank == "Jack") {
        result.push(11)
      } else if (card.rank == "Queen") {
        result.push(12)
      } else if (card.rank == "King") {
        result.push(13)
      } else if (card.rank == "Ace") {
        result.push(14)
      }
    }
    let sum = 0
    for (let val of result) {
      sum += val
    }
    return sum
  }


}









