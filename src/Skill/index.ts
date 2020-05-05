
import Tag from './Tag';
import Type from './Type';

class Skill {
	protected name: string;

	protected type: Type;

	protected tags: Set<Tag>;

	protected children: Skill[];

	constructor(name: string, tags: Tag[] = []) {
		this.name = name;
		this.type = Type.Invalid;
		this.tags = new Set(tags);
		this.children = [];
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

	getChildren(): Skill[] {
		return this.children;
	}
}

export { default as Tag } from './Tag';
export { default as Type } from './Type';

export default Skill;