export default class Player {
  constructor(name, deck) {
    this.hand = []
    this.name = name
    this.deck = deck
  }

  addToHand(card) {
    this.hand.push(card)
  }
}
