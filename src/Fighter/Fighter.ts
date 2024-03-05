import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

// interface Fighter {
//   lifePoints: number;
//   strength: number;
//   defense: number;
//   energy?: Energy;

//   attack(enemy: SimpleFighter | Fighter): void;
//   special?(enemy: SimpleFighter | Fighter): void;
//   levelUp(): void;
//   receiveDamage(attackPoints: number): number;
// }

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  special?(enemy: SimpleFighter): void;
  levelUp(): void;
}

export default Fighter;