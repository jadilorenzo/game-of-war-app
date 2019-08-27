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

  findWin(tie) {
    this.hashForFindWin = {
      'H-A' : 20, 'H-K' : 13, 'H-Q' : 12, 'H-J' : 11, 'H-10' : 10,'H-9' : 9, 'H-8' : 8, 'H-7' : 7, 'H-6' : 6, 'H-5' : 5, 'H-4' : 4, 'H-3' : 3,'H-2' : 2,
      'D-A' : 20, 'D-K' : 13, 'D-Q' : 12, 'D-J' : 11, 'D-10' : 10,'D-9' : 9, 'D-8' : 8, 'D-7' : 7, 'D-6' : 6, 'D-5' : 5, 'D-4' : 4, 'D-3' : 3,'D-2' : 2,
      'C-A' : 20, 'C-K' : 13, 'C-Q' : 12, 'C-J' : 11, 'C-10' : 10,'C-9' : 9, 'C-8' : 8, 'C-7' : 7, 'C-6' : 6, 'C-5' : 5, 'C-4' : 4, 'C-3' : 3,'C-2' : 2,
      'S-A' : 20, 'S-K' : 13, 'S-Q' : 12, 'S-J' : 11, 'S-10' : 10,'S-9' : 9, 'S-8' : 8, 'S-7' : 7, 'S-6' : 6, 'S-5' : 5, 'S-4' : 4, 'S-3' : 3,'S-2' : 2
    }
    if (this.cardsInPlay.length >= 2) {
      let card1 = null
      let card2 = null
      card1 = this.cardsInPlay[0]
      card2 = this.cardsInPlay[1]
      // this.cardsInPlay = []
      if (this.hashForFindWin[card1.type] > this.hashForFindWin[card2.type]) {
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
      } else if (this.hashForFindWin[card1.type] < this.hashForFindWin[card2.type]) {
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
        return this.findWin(true)
      }
    }
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
}
