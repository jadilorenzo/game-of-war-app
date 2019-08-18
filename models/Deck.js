export default class Deck {
  constructor() {
    // TODO: getRandomCard()
    this.all = [
      'H-A','H-K','H-Q','H-J','H-10','H-9','H-8','H-7','H-6','H-5','H-4','H-3','H-2',
      'D-A','D-K','D-Q','D-J','D-10','D-9','D-8','D-7','D-6','D-5','D-4','D-3','D-2',
      'C-A','C-K','C-Q','C-J','C-10','C-9','C-8','C-7','C-6','C-5','C-4','C-3','C-2',
      'S-A','S-K','S-Q','S-J','S-10','S-9','S-8','S-7','S-6','S-5','S-4','S-3','S-2'
    ]
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

  getRandomCard(cardNum = this.getRandomInt(this.all.length + 1)) {
    const index = cardNum

    const missingCard = this.all[index]

    this.all = this.remove(this.all, index)

    return missingCard
  }

  pickUp() {
    return this.deck.getRandomCard()
  }

  // TODO: hand.add(missingCard)
}
