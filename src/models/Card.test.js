import Card from '../models/Card';

it('card has rank', () => {
  const card = new Card('K', 'H')
  expect(card.rank).toBe('K')
});

it('card has suite', () => {
  const card = new Card('K', 'H')
  expect(card.suite).toBe('H')
});
