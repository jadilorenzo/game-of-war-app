import Card from '../models/Card';

it('card has type', () => {
  const card = new Card('H-A')
  expect(card.type).toBe('H-A')
});
