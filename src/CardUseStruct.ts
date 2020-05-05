import { CardMeta } from './Card';

interface CardUseStruct {
	from: number;
	card: CardMeta;
	to: number[] | undefined;
}

export default CardUseStruct;
