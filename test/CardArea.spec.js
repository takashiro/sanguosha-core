
import CardArea, { Type, Direction } from '../src/CardArea';

describe('CardArea', () => {
	const area = new CardArea(Type.DrawPile);

	it('is a draw pile', () => {
		expect(area.type).toBe(Type.DrawPile);
	});

	it('is empty', () => {
		expect(area.size).toBe(0);
	});

	it('adds a card', () => {
		area.add(1);
		expect(area.size).toBe(1);
	});

	it('adds a card', () => {
		area.add(3, Direction.Bottom);
		expect(area.size).toBe(2);
	});

	it('prepends a card', () => {
		area.add(2, Direction.Top);
		expect(area.size).toBe(3);
	});

	it('checkes last card', () => {
		expect(area.last()).toBe(3);
	});

	it('takes last card', () => {
		expect(area.takeLast()).toBe(3);
		expect(area.size).toBe(2);
	});

	it('checks first card', () => {
		expect(area.first()).toBe(2);
	});

	it('takes first card', () => {
		expect(area.takeFirst()).toBe(2);
		expect(area.size).toBe(1);
	});

	it('has some card', () => {
		expect(area.has(1)).toBe(true);
		expect(area.has(2)).toBe(false);
		expect(area.has(3)).toBe(false);
	});

	it('finds a card', () => {
		expect(area.find((card) => card <= 3)).toBe(1);
	});

	it('removes a card', () => {
		area.add(1000);
		expect(area.has(1000)).toBe(true);
		area.remove(1000);
		expect(area.has(1000)).toBe(false);
		expect(area.remove(1000)).toBe(false);
	});

	it('takes a random card', () => {
		expect(area.rand()).toBe(1);
		expect(area.size).toBe(1);
	});

	it('clear all cards', () => {
		area.add(2000);
		expect(area.size).toBeGreaterThan(1);
		area.clear();
		expect(area.size).toBe(0);
		expect(area.has(1)).toBe(false);
	});

	it('shifts N cards', () => {
		area.add(4, Direction.Top);
		area.add(1, Direction.Top);
		area.add(2, Direction.Top);
		area.add(3, Direction.Top);

		const tops = area.shift(3);
		expect(tops).toEqual([3, 2, 1]);
	});

	it('pops N cards', () => {
		area.add(4);
		area.add(1);
		area.add(2);
		area.add(3);

		const bottoms = area.pop(3);
		expect(bottoms).toEqual([1, 2, 3]);
	});

	it('is converted to JSON', () => {
		area.name = 'test';
		const json = area.toJSON();
		expect(json).toEqual({
			type: area.type,
			name: area.name,
		});
	});
});
