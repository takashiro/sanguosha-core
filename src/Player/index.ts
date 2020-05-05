import Kingdom from '../Kingdom';
import General from '../General';
import Gender from '../Gender';
import Phase from './Phase';
import Role from './Role';

class Player {
	protected hp: number;

	protected maxHp: number;

	protected gender: Gender;

	protected alive: boolean;

	protected dying: boolean;

	protected seat: number;

	protected phase: Phase;

	protected role: Role;

	protected kingdom: Kingdom;

	protected headGeneral: General | null;

	protected deputyGeneral: General | null;

	protected attackRange: number;

	constructor() {
		this.hp = 0;
		this.maxHp = 0;
		this.gender = Gender.Unknown;
		this.alive = true;
		this.dying = false;

		this.seat = 0;
		this.phase = 0;

		this.role = 0;
		this.kingdom = 0;
		this.headGeneral = null;
		this.deputyGeneral = null;

		this.attackRange = 1;
	}

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

	getGeneral(): General | null {
		return this.headGeneral;
	}

	setGeneral(general: General | null): void {
		this.headGeneral = general;
	}

	getHeadGeneral(): General | null {
		return this.headGeneral;
	}

	setHeadGeneral(general: General | null): void {
		this.headGeneral = general;
	}

	getDeputyGeneral(): General | null {
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
