import Deck from '../models/Deck';

describe('deck', () => {

  it('has all', () => {
    const deck = new Deck()
    expect(deck.all)
  })

  it('has the ability to remove from an array', () => {
    const deck = new Deck()
    let arr = [null, 'hello', [], {}]
    arr = deck.remove(arr, 0)
    expect(arr).toStrictEqual(['hello', [], {}])
  })

  it('has the ability to remove from the deck', () => {
    const deck = new Deck()
    deck.getRandomCard()
    expect(deck.all.length).toBe(51)
  })
})
