import { CardMeta } from '../board/Card';

interface JudgementStruct {
	who: number;
	origin: CardMeta | string;
	pending: boolean;
	effective: boolean;
	card?: CardMeta;
}

export default JudgementStruct;
