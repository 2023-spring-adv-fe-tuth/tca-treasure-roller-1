export interface Loot {
    itemName: string;
    itemValue?: number;
    saleValue: number;
    notes: string;
    markSell?: boolean;
};

export interface Hoard {
    name: string;
    timeStamp: string;
    budget?: number;
    encounterLevel?: number;
    items: Loot[];
    totalValue: number;
    totalSaleValue: number;
};

export interface HoardSetup {
    name: string;
    encounterLevel: number;
    timeStamp: string;
}

export type GetLoot = (rolls: Loot[]) => string[];

export type Encounter = (treasures: Loot[], next: Loot) => Loot[];

export type TreasureHistory = (history: Hoard[], newTreasure: Hoard) => Hoard[];

export const getItemNames: GetLoot = (items) => {
    const hoardItems = items.map(x => x.itemName);

    return hoardItems;
};

export const hoardSaleValuesOnly = (items: Loot[]) => items.filter(
    x => x.itemValue === undefined).reduce(
        (acc, x) => acc + x.saleValue, 0
    );

export const hoardItemValuesOnly = (items: Loot[]) => items.filter(
    x => x.itemValue).reduce((acc, y) => acc + (y.itemValue ?? 0 ), 0);

export const fullHoardValue = (items: Loot[]) => {
    const x = hoardSaleValuesOnly(items);
    const y = hoardItemValuesOnly(items);
    return x + y;
};

export const sellWholeHoard = (items: Loot[]) => items.reduce(
    (acc, x) => acc + x.saleValue, 0
);

export const forgeHistory: TreasureHistory = (exists, add) => [...exists, add];

export const tstngRando = (charts: Loot[][]) => {
    let makeRando = Math.floor(
        Math.random() * charts.length);
    let putsOut = charts[makeRando];
    return putsOut;
};

export const seeNest = (chart: Loot[]) => {
    let makeRando = Math.floor(Math.random() * 2);
    let putOut = chart[makeRando];
    return putOut;
};
