import { EnergyType } from '../Energy';

abstract class Archetype {
  private readonly _special: number;
  private readonly _cost: number;

  constructor(private readonly _name: string) {
    this._cost = 0;
    this._special = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;