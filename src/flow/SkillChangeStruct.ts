import SkillAreaType from '../gift/SkillArea/Type';

interface SkillChangeStruct {
	name: string;
	tags: number[];
	owner: number;
	area: SkillAreaType;
}

export default SkillChangeStruct;
