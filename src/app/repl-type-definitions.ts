export interface GameResult {
    winner: string;
    players: string[];
};

export type GetPlayer = (results: GameResult[]) => string[];

export interface DisplayPlayer {
    name: string;
    wins: number;
    losses: number;
    avg: string;
};

export type AddGame = (results: GameResult[], result: GameResult) => GameResult[];

export type LeaderCalculator = (results: GameResult[]) => DisplayPlayer[];

export type RolledTreasure = (rollResult: Loot[]) => string[];

// add default implementations...

export const getPlayerNames: GetPlayer = (grs) => {
    // flatMap gets all names of players, even repeats
    const previousPlayers = grs.flatMap(x => x.players);
    
    // Set collects only the unique players
    // .sort() lists alphabetically
    return [
        ...new Set(previousPlayers)
        ].sort();
};

export const leaderboard: LeaderCalculator = (results) => {

    const grsByPlayer = getPlayerNames(results).reduce(
        (acc, x) => acc.set(
            x, results.filter(y => y.players.includes(x))
        ), new Map<string, GameResult[]>()
    );

    return [...grsByPlayer].map(x => ({
        // object with names, game counts, wins...
        name: x[0],
        totalGames: x[1].length,
        wins: x[1].filter(y => y.winner === x[0]).length
    })).map(x => ({ // use wins/losses for math
        name: x.name,
        wins: x.wins,
        losses: x.totalGames - x.wins,
        avg: x.wins / x.totalGames
    }))
    // create a sort order including games played and tie breaks
    .sort(
        (a, b) => (a.avg * 1000 + a.wins + a.losses) > 
        (b.avg * 1000 + b.wins + b.losses) ? -1 : 1
    ).map(x => ({
        ...x, avg: x.avg.toFixed(3) // converts avg to 3 digit string
    }));
};

export const addGameResult: AddGame = (results, result) => [
    ...results,
    result
];

export interface Loot {
    itemName: string;
    saleValue: number;
    notes: string;
};

export const displayTreasure: RolledTreasure = (treasureRoll) => {
    const rolledItems = treasureRoll.map(x => x.itemName);
   
   return rolledItems;
};

export const totalTreasureValue = (treasureRoll: Loot[]) => 
    treasureRoll.reduce(
        (acc, x) => acc + x.saleValue, 0
        );