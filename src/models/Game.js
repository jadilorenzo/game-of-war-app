import Deck from './Deck'
import Card from './Card'
import Player from './Player'

export default class Game {
  constructor(name1, name2) {
    this.cards = []
    this.deck = new Deck()
    this.setDeck()
    this.player1 = new Player(name1)
    this.player2 = new Player(name2)
    this.deal()
  }

  deal() {
    for (var i = 0; i < 26; i++) {
      this.giveCardToPlayer(this.player1)
    }
    for (var j = 0; i < 26; j++) {
      this.giveCardToPlayer(this.player2)
    }
  }

  playCard() {

  }

  setDeck() {
    this.cards = []
    for (let card of this.deck.all) {
      this.cards.push(new Card(card))
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  remove(arr, index) {
    // expand all previous position
    const arrBeforeIndex = arr.slice(0, index)
    // expand remaining positions
    const arrAfterIndex = arr.slice((index + 1), arr.length)

    return [
      ...arrBeforeIndex,
      ...arrAfterIndex
    ];

  }

  getRandomCard(cardNum = this.getRandomInt(this.cards.length + 1)) {
    const index = cardNum

    const missingCard = this.cards[index]

    this.cards = this.remove(this.cards, index)
    this.setDeck()


    return missingCard
  }

  giveCardToPlayer(player) {
    player.addToHand(this.getRandomCard())
  }
}
