import DamageType from '../base/DamageType';

interface DamageStruct {
	from?: number;
	to: number;
	num: number;
	type: DamageType;
}

export default DamageStruct;
