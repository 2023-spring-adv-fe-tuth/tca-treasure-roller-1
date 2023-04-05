export interface GameResult {
    winner: string;
    players: string[];
};

export interface DisplayPlayer {
    name: string;
    wins: number;
    losses: number;
    avg: string;
};

export type AddGame = (results: GameResult[], result: GameResult) => GameResult[];

export type LeaderCalculator = (results: GameResult[]) => DisplayPlayer[];

export type GetPlayer = (results: GameResult[]) => string[];

export const getPlayerNames: GetPlayer = (grs) => {
    const previousPlayers = grs.flatMap(x => x.players);
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
        name: x[0],
        totalGames: x[1].length,
        wins: x[1].filter(y => y.winner === x[0]).length
    })).map(x => ({
        name: x.name,
        wins: x.wins,
        losses: x.totalGames - x.wins,
        avg: x.wins / x.totalGames
    }))
    .sort(
        (a, b) => (a.avg * 1000 + a.wins + a.losses) > 
        (b.avg * 1000 + b.wins + b.losses) ? -1 : 1
    ).map(x => ({
        ...x, avg: x.avg.toFixed(3)
    }));
};

export const addGameResult: AddGame = (results, result) => [
    ...results,
    result
];
