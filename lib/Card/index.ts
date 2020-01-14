
import Suit from './Suit';
import Color from './Color';
import Type from './Type';

function convertSuitToColor(suit: Suit): Color {
	if (suit === Suit.Spade || suit === Suit.Club) {
		return Color.Black;
	}
	if (suit === Suit.Heart || suit === Suit.Diamond) {
		return Color.Red;
	}
	return Color.None;
}

abstract class Card {
	protected id: number;

	protected name: string;

	protected suit: Suit;

	protected number: number;

	protected color: Color;

	constructor(name: string, suit: Suit, number: number) {
		this.id = 0;
		this.name = name;
		this.suit = suit;
		this.number = number;
		this.color = convertSuitToColor(suit);
	}

	/**
	 * @return Card id
	 */
	getId(): number {
		return this.id;
	}

	/**
	 * Set card id
	 * @param id card id
	 */
	setId(id: number): void {
		this.id = id;
	}

	/**
	 * @return Card name
	 */
	getName(): string {
		return this.name;
	}

	/**
	 * @return Card suit
	 */
	getSuit(): Suit {
		return this.suit;
	}

	/**
	 * @return Card number
	 */
	getNumber(): number {
		return this.number;
	}

	/**
	 * @return Card color
	 */
	getColor(): Color {
		return this.color;
	}

	/**
	 * @return Card type
	 */
	abstract getType(): Type;

	/**
	 * @return Check if this is a real card
	 */
	isReal(): boolean {
		return this.id > 0;
	}

	/**
	 * Convert this card to JSON
	 */
	toJSON(): object {
		return {
			id: this.id,
			name: this.name,
			suit: this.suit,
			number: this.number,
		};
	}
}

export { default as Color } from './Color';
export { default as Suit } from './Suit';
export { default as Type } from './Type';

export default Card;
