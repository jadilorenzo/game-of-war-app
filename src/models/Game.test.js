import Game from '../models/Game';
import Player from '../models/Player';

describe('game', () => {

  it('creates cards', () => {
    const game = new Game()
    game.setDeck()
    expect(game.cards.length).toStrictEqual(52)
  })

  it('has the ability to remove from an array', () => {
    const game = new Game()
    let arr = [null, 'hello', [], {}]
    arr = game.remove(arr, 0)
    expect(arr).toStrictEqual(['hello', [], {}])
  })

  it('can give a card to a player', () => {
    const game = new Game()
    const player = new Player('name1', game.cards)
    game.giveCardToPlayer(player)
    expect(player.hand).not.toBe([])
  })

  it('will split the deck at the beggining of the game', () => {
    const game = new Game()
    expect(game.player1.hand.length).toBe(52/2)
  })
})
