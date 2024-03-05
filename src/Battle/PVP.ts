import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private hero: Fighter, private rival: Fighter) {
    super(hero);
  }

  private defineAttackOrder() {
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

  // private specialAttack() {
  //   const { firstToAct, secondToAct } = this.defineAttackOrder();
  //   const firstSpecial = firstToAct.special ? firstToAct.special : firstToAct.attack;
  //   const secondSpecial = secondToAct.special ? secondToAct.special : secondToAct.attack;

  //   firstSpecial(secondToAct);
  //   if (secondToAct.lifePoints > 0) {
  //     secondSpecial(firstToAct);
  //   }
  // }

  // private normalAttack() {
  //   const { firstToAct, secondToAct } = this.defineAttackOrder();
  //   firstToAct.attack(secondToAct);
  //   if (secondToAct.lifePoints > 0) {
  //     secondToAct.attack(firstToAct);
  //   }
  // }

  // fight(): number {
  //   let round = 1;

  //   while (this.hero.lifePoints > 0 && this.rival.lifePoints > 0) {
  //     if (round % 3 === 0) {
  //       this.specialAttack();
  //     } else { this.normalAttack(); }

  //     round += 1;
  //   }
  //   return super.fight();
  // }
}

export default PVP;