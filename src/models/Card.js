export default class Card {
  constructor(rank, suite) {
    this.rank = rank
    this.suite = suite
    this.isPlayed = false
    this.belongsTo = null
    if (this.rank === 'A') {
      this.value = 20
    } else if (this.rank === 'K') {
      this.value = 13
    } else if (this.rank === 'Q') {
      this.value = 12
    } else if (this.rank === 'J') {
      this.value = 11
    } else {
      this.value = Number(this.rank)
    }
  }

  compare(otherCard) {
    if (this.value > otherCard.value) {
      return 'win'
    } else if (this.value < otherCard.value) {
      return 'lose'
    }else if (this.value < otherCard.value) {
      return 'tie'
    }
  }
}
