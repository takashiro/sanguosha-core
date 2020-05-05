import Player from '../src/Player';

describe('Player', () => {
	const player = new Player();

	it('sets/gets HP', () => {
		player.setHp(4);
		expect(player.getHp()).toBe(4);
	});

	it('sets/gets max HP', () => {
		player.setMaxHp(4);
		expect(player.getMaxHp()).toBe(4);
	});

	it('is not wounded', () => {
		expect(player.isWounded()).toBe(false);
	});

	it('is alive', () => {
		expect(player.isAlive()).toBe(true);
		expect(player.isDead()).toBe(false);
	});

	it('is wounded', () => {
		player.setHp(1);
		expect(player.isAlive()).toBe(true);
		expect(player.getLostHp()).toBe(3);
	});
});
