import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static instancesCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;