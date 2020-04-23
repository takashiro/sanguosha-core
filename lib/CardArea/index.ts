
import Type from './Type';
import Direction from './Direction';
import Locator from './Locator';

import Player from '../Player';
import Card from '../Card';

type SearchCondition = (card: Card) => boolean;

class CardArea {
	protected type: Type;

	protected owner: Player | null;

	protected name: string;

	protected cards: Card[];

	protected open: boolean;

	/**
	 * @param type
	 * @param owner
	 * @param name
	 */
	constructor(type: Type, owner: Player | null = null, name = '') {
		this.type = type;
		this.owner = owner;
		this.name = name;

		this.cards = [];
		this.open = true;
	}

	/**
	 * Gets card area type
	 */
	getType(): Type {
		return this.type;
	}

	/**
	 * Gets area owner
	 */
	getOwner(): Player | null {
		return this.owner;
	}

	/**
	 * Gets area name
	 */
	getName(): string {
		return this.name;
	}

	/**
	 * Make the area open to everyone or not
	 * @param open Whether open to everyone
	 */
	setOpen(open: boolean): void {
		this.open = open;
	}

	/**
	 * Whether the area is open to everyone
	 */
	isOpen(): boolean {
		return this.open;
	}

	/**
	 * Add a card into this area
	 * @param card
	 * @param direction
	 */
	add(card: Card, direction: Direction = Direction.Undefined): boolean {
		if (this.has(card)) {
			return false;
		}

		if (direction === Direction.Top) {
			this.cards.unshift(card);
		} else {
			this.cards.push(card);
		}

		return true;
	}

	/**
	 * Remove a card from this area
	 * @param card
	 * @return true iff this card exists and is removed
	 */
	remove(card: Card): boolean {
		const pos = this.cards.indexOf(card);
		if (pos >= 0) {
			this.cards.splice(pos, 1);
			return true;
		}

		return false;
	}

	/**
	 * Delete all cards
	 */
	clear(): void {
		this.cards = [];
	}

	/**
	 * Select a card from this area by random
	 * @return {Card}
	 */
	rand(): Card {
		const index = Math.floor(Math.random() * this.cards.length);
		return this.cards[index];
	}

	/**
	 * @return First card
	 */
	first(): Card | undefined {
		return this.cards[0];
	}

	/**
	 * Get the first card and remove it from this area
	 * @return {Card}
	 */
	takeFirst(): Card | undefined {
		return this.cards.shift();
	}

	/**
	 * Get the first N cards and remove them from this area
	 * @param num
	 */
	shift(num: number): Card[] {
		return this.cards.splice(0, num);
	}

	/**
	 * @return The last card
	 */
	last(): Card {
		return this.cards[this.cards.length - 1];
	}

	/**
	 * Get the last card and remove it from this area
	 */
	takeLast(): Card | undefined {
		return this.cards.pop();
	}

	/**
	 * Get the last N cards and remove them from this area
	 * @param num
	 */
	pop(num: number): Card[] {
		return this.cards.splice(this.cards.length - num, num);
	}

	/**
	 * Check if this area contains the card
	 * @param card
	 */
	has(card: Card): boolean {
		return this.cards.indexOf(card) >= 0;
	}

	/**
	 * Find a card that matches condition
	 * @param condition
	 */
	find(condition: SearchCondition): Card | undefined {
		return this.cards.find(condition);
	}

	/**
	 * Find all cards that matches condition
	 * @param condition
	 */
	findAll(condition: SearchCondition): Card[] {
		return this.cards.filter(condition);
	}

	/**
	 * Set cards into the area
	 * @param cards card list
	 */
	setCards(cards: Card[]): void {
		this.cards = cards;
	}

	/**
	 * @return All cards in this area
	 */
	getCards(): Card[] {
		return this.cards;
	}

	/**
	 * @return The number of cards in this area
	 */
	get size(): number {
		return this.cards.length;
	}

	/**
	 * Convert this area (without cards) into JSON
	 */
	toJSON(): Locator {
		const json: Locator = {
			type: this.type,
		};
		if (this.owner) {
			json.owner = this.owner.getSeat();
		}
		if (this.name) {
			json.name = this.name;
		}
		return json;
	}
}

export { default as Type } from './Type';
export { default as Direction } from './Direction';
export { default as Locator } from './Locator';

export default CardArea;
