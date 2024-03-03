import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static instancesCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;