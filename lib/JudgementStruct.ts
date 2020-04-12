import { CardMeta } from './Card';

interface JudgementStruct {
	who: number;
	origin: CardMeta | string;
	pending: boolean;
	effective: boolean;
	card?: CardMeta;
}

export default JudgementStruct;
