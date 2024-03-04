import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private hero: Fighter, private rival: Fighter) {
    super(hero);
  }

  defineAttackOrder() {
    const firstToAct = Math.random() < 0.5 ? this.hero : this.rival;
    const secondToAct = firstToAct === this.hero ? this.rival : this.hero;
    return { firstToAct, secondToAct };
  }

  fight(): number {
    const { firstToAct, secondToAct } = this.defineAttackOrder();

    while (this.hero.lifePoints > 0 && this.rival.lifePoints > 0) {
      firstToAct.attack(secondToAct);
      if (secondToAct.lifePoints > 0) {
        secondToAct.attack(firstToAct);
      }
    }
    return super.fight();
  }
}

export default PVP;