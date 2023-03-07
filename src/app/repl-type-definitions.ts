export interface GameResult {
    winner: string;
    players: string[];
};

export type GetPlayer = (results: GameResult[]) => string[];

export interface DisplayPlayer {
    name: string;
    wins: number;
    losses: number;
    avg: string; // forced to decimals (toFixed) produces a string
};

export type AddGame = (results: GameResult[], result: GameResult) => GameResult[];

export type LeaderCalculator = (results: GameResult[]) => DisplayPlayer[];

// add default implementations...