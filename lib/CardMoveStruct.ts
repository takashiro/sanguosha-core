import { CardMeta } from './Card';
import CardArea from './CardArea/Locator';

interface CardMoveStruct {
	from: CardArea;
	to: CardArea;
	cards?: CardMeta[];
	cardNum?: number;
}

export default CardMoveStruct;
