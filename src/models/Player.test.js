import Player from './Player';
import Card from './Card';



describe('player', () => {

  it('has an empty hand at the start', () => {
    const player = new Player()
    expect(player.hand).toStrictEqual([])
  })

  it('has a name when created', () => {
    const player = new Player('shellwords')
    expect(player.name).toStrictEqual('shellwords')
  })

  it('can select a card to play', () => {
    const player = new Player('shellwords')
    player.addToHand(new Card('A','H'))
    expect(player.selectCard(0).rank).toStrictEqual('A')
  })

  it('can remove a card', () => {
    const player = new Player('shellwords')
    player.addToHand(new Card('H-A'))
    player.removeFromHand(0)
    expect(player.hand.length).toStrictEqual(0)
  })
})
