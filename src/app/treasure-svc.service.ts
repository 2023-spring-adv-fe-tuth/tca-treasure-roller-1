import { Injectable } from '@angular/core';
import { 
  GameResult,
  leaderboard,
  Loot
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



const treasureItems: Loot[] = [
  {
      itemName: "+1 Longsword",
      saleValue: 1180,
      notes: "+1 hit and damage"
  },
  {
      itemName: "Silver Goblet",
      saleValue: 150,
      notes: "Solid silver inlaid with semiprecious stones"
  },
  {
      itemName: "123 Gold Coins",
      saleValue: 150,
      notes: "A pile of gold coins"
  },
  {
      itemName: "Uncut Sapphire",
      saleValue: 3400,
      notes: "A beautiful blue gem weighing about 1oz"
  },
  {
      itemName: "Potion of Diminution",
      saleValue: 0,
      notes: "A small vial of greenish liquid - curses the drinker to be 6in tall!"
  },
  {
      itemName: "29 Silver Coins",
      saleValue: 2.9,
      notes: "A pile of silver coins"
  },
  {
      itemName: "Copper Necklace",
      saleValue: 2,
      notes: "Beautifully wrought medallion on braided wire, worth more as art than metal"
  },
  {
      itemName: "Potion of Cure Light Wounds",
      saleValue: 50,
      notes: "Drink to heal 1d8+1hp"
  },
  {
      itemName: "Boots of Striding and Kicking",
      saleValue: 0,
      notes: "Quality boots help you walk faster, but you kick yourself in the neck once in a while. Great if you don't have a neck..."
  },
  {
      itemName: "Gauntlets of Ogre Power",
      saleValue: 4000,
      notes: "+2 Strength probably won't make you as strong as an ogre, but at least you can carry a little more loot."
  },
  {
      itemName: "19 Copper Coins",
      saleValue: 0.19,
      notes: "Someone scattered some copper here. Is it even worth gathering?"
  },
  {
      itemName: "Necklace of Fireballs",
      saleValue: 7500,
      notes: "Brightly colored glass beads are warm to the touch. The brighter the color, the hotter the burst."
  },
  {
      itemName: "+2 Leather Jerkin",
      saleValue: 2001.5,
      notes: "+2 AC, but why?"
  },
  {
      itemName: "Adamantine Full Plate",
      saleValue: 8000,
      notes: "About as tough and ostentatious as you can get, but impossible to tailor."
  }
];