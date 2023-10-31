import Dealer from "./dealer.js"
import Player from "./player.js"
import Board from "./board.js"
import Valid from "./validation.js"

let board = new Board()

let dealer = new Dealer()

let player = []
player.push(new Player("Slim"))
player.push(new Player("Luke"))


dealer.randomizeCards()
console.log(dealer.deck.cards)


dealer.giveFiveCards(player[0])
dealer.giveFiveCards(player[1])

console.log(dealer.deck.cards.length)
console.log(player[0].hand)
console.log(player[1].hand)




console.log(Valid.validate(player[0]))
console.log(Valid.validate(player[1]))









