import { CardMeta } from './Card';

interface RecoverStruct {
	from: number;

	to: number;

	num: number;

	skill?: string;

	card?: CardMeta;
}

export default RecoverStruct;
