import Game from '../models/Game';
import Player from '../models/Player';

describe('game', () => {

  it('creates cards', () => {
    const game = new Game('player1', 'player2')
    game.setDeck()
    expect(game.cards.length).toStrictEqual(52)
  })

  it('has the ability to remove from an array', () => {
    const game = new Game('player1', 'player2')
    let arr = [null, 'hello', [], {}]
    arr = game.remove(arr, 0)
    expect(arr).toStrictEqual(['hello', [], {}])
  })

  it('can give a card to a player', () => {
    const game = new Game('player1', 'player2')
    const player = new Player('name1', game.cards)
    game.giveCardToPlayer(player)
    expect(player.hand).not.toBe([])
  })

  it('will split the deck at the beggining of the game', () => {
    const game = new Game('player1', 'player2')
    expect(game.player1.hand.length).toBe(52/2)
  })

  it('will split the deck at the beggining of the game', () => {
    const game = new Game('player1', 'player2')
    expect(game.player2.hand.length).toBe(52/2)
  })

  it('does not throw random undefined in the hand', () => {
    const game = new Game('player1', 'player2')
    expect(game.player2.hand.includes(undefined)).toBe(false)
  })

  it('does not throw random undefined in the hand', () => {
    const game = new Game('player1', 'player2')
    expect(game.player1.hand.includes(undefined)).toBe(false)
  })

  it('can allow the player to play a card', () => {
    const game = new Game('player1', 'player2')
    game.playCard(game.player1, 0)
    expect(game.cardsInPlay[0].isPlayed).toBe(true)
  })

  it('will determing which player won', () => {
    const game = new Game('player1', 'player2')
    game.playCard(game.player1, 0)
    game.playCard(game.player2, 0)
    expect((game.findWin().name === 'player1') || (game.findWin().name === 'player2')).toBe(true)
  })

})
