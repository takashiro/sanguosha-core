import Skill from '../src/Skill';
import SkillArea, { Type } from '../src/SkillArea';

describe('SkillArea', () => {
	const area = new SkillArea(Type.HeadAcquired);
	const skill1 = new Skill('test1');
	const skill2 = new Skill('test2');

	it('adds a skill', () => {
		area.add(skill1);
	});

	it('has skill 1', () => {
		expect(area.has(skill1)).toBe(true);
		expect(area.has(skill2)).toBe(false);
	});

	it('adds another skill', () => {
		area.add(skill2);
		expect(area.has(skill2)).toBe(true);
	});

	it('removes duplicate skill', () => {
		expect(area.add(skill1)).toBe(false);
	});

	it('removes skill 1', () => {
		expect(area.has(skill1)).toBe(true);

		area.remove(skill1);
		expect(area.has(skill1)).toBe(false);

		area.remove(skill1);
		expect(area.has(skill1)).toBe(false);
	});
});
