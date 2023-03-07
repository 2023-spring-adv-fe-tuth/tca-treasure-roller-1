import { Injectable } from '@angular/core';
import { 
  GameResult,
  leaderboard
} from './repl-type-definitions';

const gameResults3: GameResult[] = [
  {
      winner: "Lord Glablok",
      players: ["Lord Glablok", "Minion One"]
  },
  {
      winner: "Minion One",
      players: ["Minion Two", "Minion One"]
  },
  {
      winner: "Lord Glablok",
      players: ["Lord Glablok", "Coldshard", "Minion One", "Minion Two"]
  }
];

@Injectable({
  providedIn: 'root'
})
export class TreasureSvcService {

  constructor() { }

  grs: GameResult[] = gameResults3;

  leaderboard = () => leaderboard(this.grs);
}
