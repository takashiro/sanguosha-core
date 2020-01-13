
import Type from './Type';
import Direction from './Direction';

import Player from '../Player';
import Card from '../Card';

interface CardAreaProfile {
	type: number;
	owner?: number;
	name?: string;
}

type SearchCondition = (card: Card) => boolean;

class CardArea {
	type: Type;

	owner: Player;

	name: string;

	cards: Card[];

	/**
	 * @param type
	 * @param owner
	 * @param name
	 */
	constructor(type: Type, owner: Player = null, name = '') {
		this.type = type;
		this.owner = owner;
		this.name = name;

		this.cards = [];
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
	first(): Card {
		return this.cards[0];
	}

	/**
	 * Get the first card and remove it from this area
	 * @return {Card}
	 */
	takeFirst(): Card {
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
	takeLast(): Card {
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
	find(condition: SearchCondition): Card {
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
	toJSON(): CardAreaProfile {
		const json: CardAreaProfile = {
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

export default CardArea;