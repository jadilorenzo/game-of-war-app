import Game from '../models/Game';
import Player from '../models/Player';
import Card from '../models/Card';

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

  it('has cards', () => {
    const game = new Game('player1', 'player2')
    expect(game.cards).not.toBe([])
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
    expect((game.findWhichCardWins().name === 'player1') || (game.findWhichCardWins().name === 'player2')).toBe(true)
  })

  it('will determine a tie', () => {
    const game = new Game('player1', 'player2')

    let card1 = new Card('K', 'H')
    card1.belongsTo = game.player1

    let card2 = new Card('K', 'C')
    card1.belongsTo = game.player1

    game.cardsInPlay = [card1, card2]
    expect(game.findWhichCardWins().hand.length).toBe(52/2 + 8 - 3)
  })
})
