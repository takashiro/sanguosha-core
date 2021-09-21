import Kingdom from '../../base/Kingdom';
import General from '../../gift/General';
import Gender from '../../base/Gender';
import Phase from './Phase';
import Role from './Role';

function notEmpty<Type>(value: Type | null | undefined): value is Type {
	return Boolean(value);
}

class Player {
	protected hp = 0;

	protected maxHp = 0;

	protected gender = Gender.Unknown;

	protected alive = true;

	protected dying = false;

	protected seat = 0;

	protected phase = Phase.Inactive;

	protected role = Role.Invalid;

	protected kingdom = Kingdom.Unknown;

	protected headGeneral?: General;

	protected deputyGeneral?: General;

	protected attackRange = 1;

	getHp(): number {
		return this.hp;
	}

	setHp(hp: number): void {
		this.hp = hp;
	}

	getMaxHp(): number {
		return this.maxHp;
	}

	setMaxHp(maxHp: number): void {
		this.maxHp = maxHp;
	}

	getGender(): Gender {
		return this.gender;
	}

	setGender(gender: Gender): void {
		this.gender = gender;
	}

	getLostHp(): number {
		return Math.max(this.getMaxHp() - this.getHp(), 0);
	}

	isWounded(): boolean {
		return this.getLostHp() > 0;
	}

	isAlive(): boolean {
		return this.alive;
	}

	setAlive(alive: boolean): void {
		this.alive = !!alive;
	}

	isDead(): boolean {
		return !this.alive;
	}

	setDead(dead: boolean): void {
		this.alive = !dead;
	}

	isDying(): boolean {
		return this.dying;
	}

	setDying(dying: boolean): void {
		this.dying = !!dying;
	}

	getSeat(): number {
		return this.seat;
	}

	setSeat(seat: number): void {
		this.seat = seat;
	}

	getPhase(): Phase {
		return this.phase;
	}

	setPhase(phase: Phase): void {
		this.phase = phase;
	}

	getRole(): Role {
		return this.role;
	}

	setRole(role: Role): void {
		this.role = role;
	}

	getKingdom(): Kingdom {
		return this.kingdom;
	}

	setKingdom(kingdom: Kingdom): void {
		this.kingdom = kingdom;
	}

	getGenerals(): General[] {
		const generals = [
			this.headGeneral,
			this.deputyGeneral,
		];
		return generals.filter(notEmpty);
	}

	getGeneral(): General | undefined {
		return this.headGeneral;
	}

	setGeneral(general: General | undefined): void {
		this.headGeneral = general;
	}

	getHeadGeneral(): General | undefined {
		return this.headGeneral;
	}

	setHeadGeneral(general: General | undefined): void {
		this.headGeneral = general;
	}

	getDeputyGeneral(): General | undefined {
		return this.deputyGeneral;
	}

	setDeputyGeneral(general: General): void {
		this.deputyGeneral = general;
	}

	getAttackRange(): number {
		return this.attackRange;
	}

	setAttackRange(range: number): void {
		this.attackRange = range;
	}
}

export { default as Phase } from './Phase';
export { default as Role } from './Role';

export default Player;
