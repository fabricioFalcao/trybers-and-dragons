import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private hero: Fighter, private rival: Fighter) {
    super(hero);
  }

  static defineAttackOrder(hero: Fighter, rival: Fighter) {
    const firstToAct = Math.random() < 0.5 ? hero : rival;
    const secondToAct = firstToAct === hero ? rival : hero;
    return { firstToAct, secondToAct };
  }

  fight(): number {
    const { firstToAct, secondToAct } = PVP.defineAttackOrder(this.hero, this.rival);

    while (this.hero.lifePoints > 0 && this.rival.lifePoints > 0) {
      firstToAct.attack(secondToAct);
      if (secondToAct.lifePoints > 0) {
        secondToAct.attack(firstToAct);
      }
    }
    return super.fight();
  }

  // private specialAttack() {
  //   const { firstToAct, secondToAct } = PVP.defineAttackOrder(this.hero, this.rival);
  //   const firstSpecial = firstToAct.special ? firstToAct.special : firstToAct.attack;
  //   const secondSpecial = secondToAct.special ? secondToAct.special : secondToAct.attack;

  //   firstSpecial(secondToAct);
  //   if (secondToAct.lifePoints > 0) {
  //     secondSpecial(firstToAct);
  //   }
  // }

  // private normalAttack() {
  //   const { firstToAct, secondToAct } = PVP.defineAttackOrder(this.hero, this.rival);
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