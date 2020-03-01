import Card, { Suit, Color } from '../lib/Card';

class TestCard extends Card {
}

describe('Card', () => {
	const card = new TestCard('test', Suit.Heart, 12);

	it('is virtual', () => {
		expect(card.isReal()).toBe(false);
	});

	it('is named test', () => {
		expect(card.getName()).toBe('test');
	});

	it('is of Heart', () => {
		expect(card.getSuit()).toBe(Suit.Heart);
	});

	it('is numbered 12', () => {
		expect(card.getNumber()).toBe(12);
	});

	it('is red', () => {
		expect(card.getColor()).toBe(Color.Red);
	});

	it('is converted to JSON', () => {
		const data = card.toJSON();
		expect(data.id).toBe(0);
		expect(data.name).toBe('test');
		expect(data.suit).toBe(Suit.Heart);
		expect(data.number).toBe(12);
	});
});
