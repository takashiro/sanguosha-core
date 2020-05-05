import DamageType from './DamageType';

interface DamageStruct {
	from?: number;
	to: number;
	num: number;
	type: DamageType;
}

export default DamageStruct;
