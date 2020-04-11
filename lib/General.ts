import Gender from './Gender';
import Kingdom from './Kingdom';
import GeneralPofile from './GeneralProfile';
import Skill from './Skill';

type SkillClass = new() => Skill;

class General {
	protected id: number;

	protected name: string;

	protected kingdom: Kingdom;

	protected maxHp: number;

	protected gender: Gender;

	protected emperor: boolean;

	protected hidden: boolean;

	protected headExtraMaxHp: number;

	protected deputyExtraMaxHp: number;

	protected companions: Set<string>;

	protected skills: SkillClass[];

	constructor(name: string, kingdom: Kingdom, maxHp: number, gender: Gender) {
		this.id = 0;
		this.name = name;
		this.kingdom = kingdom;
		this.maxHp = maxHp;
		this.gender = gender;

		this.emperor = false;
		this.hidden = false;

		this.headExtraMaxHp = 0;
		this.deputyExtraMaxHp = 0;

		this.companions = new Set();

		this.skills = [];
	}

	getId(): number {
		return this.id;
	}

	getName(): string {
		return this.name;
	}

	getKingdom(): Kingdom {
		return this.kingdom;
	}

	getMaxHp(): number {
		return this.maxHp;
	}

	getGender(): Gender {
		return this.gender;
	}

	setEmperor(emperor: boolean): void {
		this.emperor = emperor;
	}

	isEmperor(): boolean {
		return this.emperor;
	}

	isHidden(): boolean {
		return this.hidden;
	}

	getHeadMaxHp(): number {
		return this.maxHp + this.headExtraMaxHp;
	}

	getDeputyMaxHp(): number {
		return this.maxHp + this.deputyExtraMaxHp;
	}

	addCompanion(companion: General): void {
		this.companions.add(companion.getName());
	}

	isCompanionWith(general: General): boolean {
		return this.companions.has(general.getName());
	}

	addSkill(skillClass: SkillClass): void {
		this.skills.push(skillClass);
	}

	getSkills(): SkillClass[] {
		return this.skills;
	}

	toJSON(): GeneralPofile {
		return {
			id: this.getId(),
			kingdom: this.getKingdom(),
			name: this.getName(),
		};
	}
}

export default General;
