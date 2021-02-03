import AreaLocator from './board/CardArea/Locator';

interface CardOptionStruct {
	areas: AreaLocator[];
	minNum: number;
	maxNum: number;
	cards?: number[];
}

export default CardOptionStruct;
