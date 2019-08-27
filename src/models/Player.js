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

  removeFromHand(index) {
    this.hand = this.remove(this.hand, index)
  }


}
