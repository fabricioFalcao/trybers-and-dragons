import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;