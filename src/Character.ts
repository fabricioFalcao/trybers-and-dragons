import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints < 0) { this._lifePoints = -1; }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const attackPoints = this._strength;
    enemy.receiveDamage(attackPoints);
  }

  levelUp(): void {
    this._defense += 1;
    this._dexterity += 2;
    this._strength += 1;

    this._maxLifePoints = Math.min(this._race.maxLifePoints, this._maxLifePoints + 5);

    this._lifePoints = this._maxLifePoints;
    this._energy.amount = 10;
  }

  special(enemy: Fighter): void {
    // Spend randomly 1 to 10 mana. For each mana spent, increase the base attack by 20%.
    const manaSpent = Math.min(getRandomInt(1, 10), this._energy.amount);
    const specialAttackPoints = this._strength * (1 + 0.2 * manaSpent);
    enemy.receiveDamage(specialAttackPoints);
  }
}

export default Character;