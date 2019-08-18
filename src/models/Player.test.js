import Player from './Player';


describe('player', () => {

  it('has an empty hand at the start', () => {
    const player = new Player()
    expect(player.hand).toStrictEqual([])
  })

  it('has a name when created', () => {
    const player = new Player('shellwords')
    expect(player.name).toStrictEqual('shellwords')
  })
})
