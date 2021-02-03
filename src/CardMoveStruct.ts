import { CardMeta } from './board/Card';
import CardArea from './board/CardArea/Locator';

interface CardMoveStruct {
	from: CardArea;
	to: CardArea;
	cards?: CardMeta[];
	cardNum?: number;
}

export default CardMoveStruct;
