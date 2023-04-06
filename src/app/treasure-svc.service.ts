import { 
    Loot, 
    fullHoardValue,
    HoardSetup,
    Hoard,
    sellWholeHoard,
    TreasureHistory,
    forgeHistory
 } from './treasure-types';
import { Injectable } from '@angular/core';
import { 
  GameResult,
  leaderboard,
  addGameResult,
  getPlayerNames
} from './repl-type-definitions';

@Injectable({
  providedIn: 'root'
})
export class TreasureSvcService {

  constructor() { }

  grs: GameResult[] = gameResults3;
  testH: Hoard[] = testHistory;
  otherHoard: Hoard = thirdHoard;
  itsTwo: Loot[] = secondTreasure;
  reroll: Loot[] = treasureItems;

  leaderboard = () => leaderboard(this.grs);

  forgeHistory = (adding: Hoard) => {
    this.testH = forgeHistory(this.testH, adding);
  }

  addGameResult = (adding: GameResult) => {
    this.grs = addGameResult(this.grs, adding);
  };

  getPlayerNames = () => getPlayerNames(this.grs);

  setupInfo: {
    start: string;
    players: string[]
  } = {
    start: "",
    players: []
  };

};

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

const treasureItems: Loot[] = [
  {
      itemName: "+1 Longsword",
      itemValue: 2360,
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
      saleValue: 123,
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
      itemValue: 50,
      saleValue: 25,
      notes: "Drink to heal 1d8+1hp"
  },
  {
      itemName: "Boots of Striding and Kicking",
      saleValue: 0,
      notes: "Quality boots help you walk faster, but you kick yourself in the neck once in a while. Great if you don't have a neck..."
  },
  {
      itemName: "Gauntlets of Ogre Power",
      itemValue: 4000,
      saleValue: 2000,
      notes: "+2 Strength probably won't make you as strong as an ogre, but at least you can carry a little more loot."
  },
  {
      itemName: "19 Copper Coins",
      saleValue: 0.19,
      notes: "Someone scattered some copper here. Is it even worth gathering?"
  },
  {
      itemName: "Necklace of Fireballs",
      itemValue: 7500,
      saleValue: 3750,
      notes: "Brightly colored glass beads are warm to the touch. The brighter the color, the hotter the burst."
  },
  {
      itemName: "+2 Leather Jerkin",
      itemValue: 4002,
      saleValue: 2001,
      notes: "+2 AC, but why?"
  },
  {
      itemName: "Adamantine Full Plate",
      itemValue: 16650,
      saleValue: 8325,
      notes: "About as tough and ostentatious as you can get, but impossible to tailor."
  }
];

const secondTreasure: Loot[] = [
    {
        itemName: "Bracers of Dexterity +4",
        itemValue: 16000,
        saleValue: 8000,
        notes: "wear these to be more nimble"
    },
    {
        itemName: "Helm of Command",
        itemValue: 32000,
        saleValue: 16000,
        notes: "Charisma bonuses and charm spells - can be very dangerous in the wrong hands"
    },
    {
        itemName: "Gold idol",
        saleValue: 1500,
        notes: "A sculpture of some ancient, probably forgotten god; it's 30lbs of solid gold though"
    },
    {
        itemName: "Oil painting on dragonhide",
        saleValue: 4300,
        notes: "You have to be bold or stupid to paint on dragonhide. Such a wholesome picture of a werewolf eating a family. Precious metal threads, mother-of-pearl, and a few semiprecious stones accentuate several details; ironic how the werewolf's body is highlighted in silver threads, but the moonstone eyes are spot-on."
    },
    {
        itemName: "129 platinum coins",
        saleValue: 1290,
        notes: "Every coin was in a different spot. It's possible you could find more if you search longer."
    },
    {
        itemName: "Bracers of Armor +4",
        itemValue: 16000,
        saleValue: 8000,
        notes: "A thin barrier of force protects the wearer like light armor."
    },
    {
        itemName: "Scroll of Bull Strength",
        itemValue: 150,
        saleValue: 75,
        notes: "Many people find it helpful to keep scrolls of utilitiy spells such as this, saving their memory for more powerful spells."
    }
];

const dummySetup: HoardSetup = {
    name: "Orc Camp",
    encounterLevel: 9,
    timeStamp: "3-23-2023"
}

const dummyHoard: Hoard = {
    name: "Orc Camp",
    timeStamp: "3-23-2023",
    encounterLevel: 9,
    items: secondTreasure,
    totalValue: fullHoardValue(secondTreasure),
    totalSaleValue: sellWholeHoard(secondTreasure)
}

const otherHoard: Hoard = {
    name: "Dragon's Lair",
    timeStamp: "9-22-2022",
    encounterLevel: 11,
    items: treasureItems,
    totalValue: fullHoardValue(treasureItems),
    totalSaleValue: sellWholeHoard(treasureItems)
}

const thirdTreasure: Loot[]= [
    {
        itemName: "+1 Longsword",
        itemValue: 2360,
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
        saleValue: 123,
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
        itemName: "Bracers of Armor +4",
        itemValue: 16000,
        saleValue: 8000,
        notes: "A thin barrier of force protects the wearer like light armor."
    },
    {
        itemName: "Scroll of Bull Strength",
        itemValue: 150,
        saleValue: 75,
        notes: "Many people find it helpful to keep scrolls of utilitiy spells such as this, saving their memory for more powerful spells."
    }
]

const thirdHoard: Hoard = {
    name: "Troll's Den",
    timeStamp: "4-14-1982",
    items: thirdTreasure,
    totalValue: fullHoardValue(thirdTreasure),
    totalSaleValue: sellWholeHoard(thirdTreasure)
}

const testHistory: Hoard[] = [
    dummyHoard,
    otherHoard
]
