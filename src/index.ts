import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const soloLeveling = (lvl: number, player: Character) => {
  for (let i = 0; i < lvl; i += 1) {
    player.levelUp();
  }
};

const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
const player3 = new Character('Player 3');
soloLeveling(4, player1);

const monster1 = new Monster();
const monster2 = new Dragon();
// const dragon2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

const Pitty = new Character('Pitty');
soloLeveling(20, Pitty);

// const pvPitty = new PVP(Pitty, player1).fight();
// const evPitty = new PVE(Pitty, [monster1, monster2, dragon2]).fight();

// console.log({
//   pvPitty,
//   evPitty,
// });

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};