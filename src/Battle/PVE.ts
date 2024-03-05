import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(private hero: Fighter, private foes: SimpleFighter[]) {
    super(hero);
  }

  static findAliveFoe(foes: SimpleFighter[]) {
    return foes.find((foe) => foe.lifePoints > 0);
  }

  fight(): number {
    let target = PVE.findAliveFoe(this.foes);

    while (this.hero.lifePoints > 0 && target) {
      this.hero.attack(target);

      target = PVE.findAliveFoe(this.foes);

      if (target) {
        this.foes.forEach((foe) => foe.attack(this.hero));
      }
    }
    return super.fight();
  }
}

export default PVE;