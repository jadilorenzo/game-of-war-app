export default class Player {
  constructor(name) {
    this.hand = []
    this.name = name
  }

  addToHand(card) {
    this.hand.push(card)
  }
}
