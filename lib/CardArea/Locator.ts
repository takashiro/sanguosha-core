import Type from './Type';

interface Locator {
	type: Type;
	owner?: number;
	name?: string;
}

export default Locator;
