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
    this.cardsInPlay = []
  }

  deal() {
    for (var i = 0; i < 26; i++) {
      this.giveCardToPlayer(this.player1)
    }
    for (var j = 0; j < 26; j++) {
      this.giveCardToPlayer(this.player2)
    }
  }

  playCard(player, index) {
    if (this.cardsInPlay.length >= 2) {
      this.cardsInPlay = []
    }
    player.removeFromHand(index)
    this.cardsInPlay.push(player.selectCard(index, player))
  }

  findWhichCardWins(tie) {
    let card1 = null
    let card2 = null
    card1 = this.cardsInPlay[0]
    card2 = this.cardsInPlay[1]

    if (card1.compare(card2) === 'win') {
      if (tie) {
        this.giveCardToPlayer(card1.belongsTo, card1)
        this.giveCardToPlayer(card1.belongsTo, card2)
        this.giveCardToPlayer(card1.belongsTo, this.cardsInPlay[2])
        this.giveCardToPlayer(card1.belongsTo, this.cardsInPlay[3])
        this.giveCardToPlayer(card1.belongsTo, this.cardsInPlay[4])
        this.giveCardToPlayer(card1.belongsTo, this.cardsInPlay[5])
        this.giveCardToPlayer(card1.belongsTo, this.cardsInPlay[6])
        this.giveCardToPlayer(card1.belongsTo, this.cardsInPlay[7])
      } else {
        this.giveCardToPlayer(card1.belongsTo, card1)
        this.giveCardToPlayer(card1.belongsTo, card2)
      }
      return card1.belongsTo
    } else if (card2.compare(card1) === 'win') {
      if (tie) {
        this.giveCardToPlayer(card2.belongsTo, card1)
        this.giveCardToPlayer(card2.belongsTo, card2)
        this.giveCardToPlayer(card2.belongsTo, this.cardsInPlay[2])
        this.giveCardToPlayer(card2.belongsTo, this.cardsInPlay[3])
        this.giveCardToPlayer(card2.belongsTo, this.cardsInPlay[4])
        this.giveCardToPlayer(card2.belongsTo, this.cardsInPlay[5])
        this.giveCardToPlayer(card2.belongsTo, this.cardsInPlay[6])
        this.giveCardToPlayer(card2.belongsTo, this.cardsInPlay[7])
      } else {
        this.giveCardToPlayer(card2.belongsTo, card1)
        this.giveCardToPlayer(card2.belongsTo, card2)
      }
      return card2.belongsTo
    } else {
      this.playCard(this.player1, 0)
      this.playCard(this.player2, 0)
      this.playCard(this.player1, 0)
      this.playCard(this.player2, 0)
      this.playCard(this.player1, 0)
      this.playCard(this.player2, 0)
      return this.findWhichCardWins(true)
    }

  }

  setDeck() {
    this.cards = []
    for (let suite of this.deck.allSuite) {
      for (let rank of this.deck.allRank) {
        this.cards.push(new Card(rank, suite))
      }
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

  getRandomCard(player, cardNum = this.getRandomInt(this.cards.length - 1)) {
    const index = cardNum

    const missingCard = this.cards[index]

    missingCard.belongsTo = player

    this.cards = this.remove(this.cards, index)
    this.setDeck()


    return missingCard
  }

  giveCardToPlayer(player, card = this.getRandomCard(player)) {
    player.addToHand(card)
  }

  isGameOver() {
    if ((this.player1.hand.length === 52)|| (this.player2.hand.length === 52)) {
      return true
    } else {
      return false
    }
  }
}
