import Deck from '../models/Deck';

describe('deck', () => {

  it('has all', () => {
    const deck = new Deck()
    expect(deck.all)
  })
})
