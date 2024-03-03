import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static instancesCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;