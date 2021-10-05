import CardArea from '../board/CardArea/Locator';

interface Move {
	from: CardArea;
	to: CardArea;
}

interface VisibleMove extends Move {
	cards: number[];
}

interface HiddenMove extends Move {
	cardNum: number;
}

type CardMoveStruct = VisibleMove | HiddenMove;

export default CardMoveStruct;
