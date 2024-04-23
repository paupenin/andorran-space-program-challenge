// Location is just a string with no validation, because the Andorran Space Program
// is not very good at keeping track of where things are.
export type Location = string;

export interface Variant {
    serialNumber: string;
    quantity: number;
    location: Location;
    hoursInSpace?: number;
}

export interface Item {
    name: string;
    variants: Variant[];
}

export type ObjectId = string;

export type ItemList = Record<ObjectId, Item>;