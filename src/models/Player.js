export default class Player {
  constructor(name) {
    this.hand = []
    this.name = name
  }

  addToHand(card) {
    this.hand.push(card)
  }

  selectCard(index, player) {
    this.hand[index].isPlayed = true
    this.hand[index].belongsTo = player
    return this.hand[index]
  }
}
