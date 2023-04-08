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
  
  const cursedItems: Loot[] = [
      {
        itemName: "Boots of Striding and Kicking",
        saleValue: 0,
        notes: "Quality boots help you walk faster, but you kick yourself in the neck once in a while. Great if you don't have a neck..."
    },
    {
        itemName: "Potion of Diminution",
        saleValue: 0,
        notes: "A small vial of greenish liquid - curses the drinker to be 6in tall!"
    }
  ]
  
  const armorItems: Loot[] = [
      {
        itemName: "Adamantine Full Plate",
        itemValue: 16650,
        saleValue: 8325,
        notes: "About as tough and ostentatious as you can get, but impossible to tailor."
    },
    {
        itemName: "+2 Leather Jerkin",
        itemValue: 4002,
        saleValue: 2001,
        notes: "+2 AC, but why?"
    }
  
  ]
  
  const weaponItems: Loot[] = [
      {
        itemName: "+1 Longsword",
        itemValue: 2360,
        saleValue: 1180,
        notes: "+1 hit and damage"
    },
    {
      itemName: "+1 shortbow",
      itemValue: 2318,
      saleValue: 1159,
      notes: "adds +1 to hit and damage to arrows fired"
    }
  
  ]
  
  const clothingItems: Loot[] = [
      {
          itemName: "Bracers of Armor +4",
          itemValue: 16000,
          saleValue: 8000,
          notes: "A thin barrier of force protects the wearer like light armor."
      },
      {
          itemName: "Helm of Command",
          itemValue: 32000,
          saleValue: 16000,
          notes: "Charisma bonuses and charm spells - can be very dangerous in the wrong hands"
      },
      {
          itemName: "Bracers of Dexterity +4",
          itemValue: 16000,
          saleValue: 8000,
          notes: "wear these to be more nimble"
      },
      {
        itemName: "Gauntlets of Ogre Power",
        itemValue: 4000,
        saleValue: 2000,
        notes: "+2 Strength probably won't make you as strong as an ogre, but at least you can carry a little more loot."
    }
  ]
  
  const miscItems: Loot[] = [
      {
        itemName: "Necklace of Fireballs",
        itemValue: 7500,
        saleValue: 3750,
        notes: "Brightly colored glass beads are warm to the touch. The brighter the color, the hotter the burst."
      },
      {
          itemName: "Feather token",
          itemValue: 50,
          saleValue: 25,
          notes: "Wave it to make yourself fall slower - it's not for tickling"
      },
      {
          itemName: "Folding Boat",
          itemValue: 500,
          saleValue: 250,
          notes: "Speak a command word to make this 4-person rowboat fold or unfold"
      },
      {
          itemName: "Jade Panther Figurine",
          itemValue: 15000,
          saleValue: 7500,
          notes: "Command word turns this figurine into a panther construct for 5 minutes per day"
      },
      {
          itemName: "Saddle of Comfort",
          itemValue: 3000,
          saleValue: 1500,
          notes: "Keeps you and your mount comfortable while riding, never chafes or wobbles"
      },
      {
          itemName: "Horseshoes of flying",
          itemValue: 6000,
          saleValue: 3000,
          notes: "The horse wearing these shoes can fly for 2 hours a day; hope it's not scared of heights"
      }
  ]
  
  const potionItems: Loot[] = [
      {
        itemName: "Potion of Cure Light Wounds",
        itemValue: 50,
        saleValue: 25,
        notes: "Drink to heal 1d8+1hp"
    },
    {
      itemName: "Elixir of Hastening",
      itemValue: 750,
      saleValue: 375,
      notes: "Drink me and you'll go faster"
    },
    {
      itemName: "Oil of Flame",
      itemValue: 400,
      saleValue: 200,
      notes: "Rub me on your favorite weapon - not that one"
    },
    {
      itemName: "Potion of Cure Moderate Wounds",
      itemValue: 300,
      saleValue: 150,
      notes: "heals 2d8+3 hit points"
    }
  ]
  
  const artItems: Loot[] = [
      {
          itemName: "Oil painting on dragonhide",
          saleValue: 4300,
          notes: "You have to be bold or stupid to paint on dragonhide. Such a wholesome picture of a werewolf eating a family. Precious metal threads, mother-of-pearl, and a few semiprecious stones accentuate several details; ironic how the werewolf's body is highlighted in silver threads, but the moonstone eyes are spot-on."
      },
      {
          itemName: "Gold idol",
          saleValue: 1500,
          notes: "A sculpture of some ancient, probably forgotten god; it's 30lbs of solid gold though"
      },
      {
        itemName: "Copper Necklace",
        saleValue: 2,
        notes: "Beautifully wrought medallion on braided wire, worth more as art than metal"
      },
      {
        itemName: "Silver Goblet",
        saleValue: 150,
        notes: "Solid silver inlaid with semiprecious stones"
    }
  ]
  
  const coinPiles: Loot[] = [
      {
          itemName: "129 platinum coins",
          saleValue: 1290,
          notes: "Every coin was in a different spot. It's possible you could find more if you search longer."
      },
      {
        itemName: "19 Copper Coins",
        saleValue: 0.19,
        notes: "Someone scattered some copper here. Is it even worth gathering?"
      },
      {
        itemName: "29 Silver Coins",
        saleValue: 2.9,
        notes: "A pile of silver coins"
    },
    {
        itemName: "123 Gold Coins",
        saleValue: 123,
        notes: "A pile of gold coins"
    }
  ]
  
  const gemItems: Loot[] = [
      {
        itemName: "Uncut Sapphire",
        saleValue: 3400,
        notes: "A beautiful blue gem weighing about 1oz"
    },
    {
      itemName: "Jacinth",
      saleValue: 500,
      notes: "a pretty rock"
    },
    {
      itemName: "Onyx",
      saleValue: 50,
      notes: "Useful for making undead"
    },
    {
      itemName: "Jade",
      saleValue: 50,
      notes: "A green rock"
    },
    {
      itemName: "Emerald",
      saleValue: 700,
      notes: "A translucent green rock"
    },
    {
      itemName: "Diamond",
      saleValue: 5000,
      notes: "A girl's best friend... especially if she needs a resurrection"
    }
  ]
  
  const scrollItems: Loot[] = [
      {
          itemName: "Scroll of Bull Strength",
          itemValue: 150,
          saleValue: 75,
          notes: "Many people find it helpful to keep scrolls of utilitiy spells such as this, saving their memory for more powerful spells."
      },
      {
          itemName: "Scroll of Levitate",
          itemValue: 150,
          saleValue: 75,
          notes: "Makes you float - not fly, just float, up or down"
      },
      {
          itemName: "Scoll of Prayer",
          itemValue: 350,
          saleValue: 175,
          notes: "Don't forget, my son, to include everyone"
      },
      {
          itemName: "Scroll of Wish",
          itemValue: 10000,
          saleValue: 5000,
          notes: "No way this could backfire and have dire consequences"
      }
  ]
  
  const wandItems: Loot[] = [
      {
          itemName: "Wand of lightning Bolt",
          itemValue: 5000,
          saleValue: 2500,
          notes: "120ft bolt of 5d6 electric damage"
      },
      {
          itemName: "Wand of magic missile",
          itemValue: 75,
          saleValue: 37.5,
          notes: "One missle for 1d4+1 damage unerringly hits your target"
      },
      {
          itemName: "Wand of stoneskin",
          itemValue: 22000,
          saleValue: 11000,
          notes: "Target is protected with DR 10/Adamantine, but it only absorbs up to 150 damage"
      }
  ]

const tstChrts = [
    armorItems, 
    weaponItems, 
    miscItems,
    potionItems,
    artItems,
    coinPiles,
    gemItems,
    scrollItems,
    clothingItems,
    cursedItems,
    wandItems
];