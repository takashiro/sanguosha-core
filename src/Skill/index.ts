import Tag from './Tag';
import Type from './Type';

export interface Owner {
	hasSkill(skill: Skill): boolean;
}

class Skill {
	protected owner: Owner;

	protected name: string;

	protected type: Type;

	protected tags: Set<Tag>;

	constructor(owner: Owner, name: string, tags: Tag[] = []) {
		this.owner = owner;
		this.name = name;
		this.type = Type.Invalid;
		this.tags = new Set(tags);
	}

	getOwner(): Owner {
		return this.owner;
	}

	getName(): string {
		return this.name;
	}

	getTags(): Set<Tag> {
		return this.tags;
	}

	hasTag(tag: Tag): boolean {
		return this.tags.has(tag);
	}
}

export { default as Tag } from './Tag';
export { default as Type } from './Type';

export default Skill;
