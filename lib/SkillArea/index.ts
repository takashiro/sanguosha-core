import Type from './Type';
import Skill from '../Skill';

class SkillArea {
	protected type: Type;

	protected skills: Skill[];

	constructor(type: Type) {
		this.type = type;
		this.skills = [];
	}

	has(skill: Skill): boolean {
		return this.skills.indexOf(skill) >= 0;
	}

	add(skill: Skill): boolean {
		if (this.has(skill)) {
			return false;
		}

		this.skills.push(skill);
		return true;
	}

	remove(skill: Skill): boolean {
		const index = this.skills.indexOf(skill);
		if (index >= 0) {
			this.skills.splice(index, 1);
			return true;
		}

		return false;
	}
}

export { default as Type } from './Type';
export default SkillArea;
