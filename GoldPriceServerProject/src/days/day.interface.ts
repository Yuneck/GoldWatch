export interface Day {
    date : string,
    goldPricerice : string;
    silverPrice : string;
    platiniumPrice : string;
    palladiumPrice : string;
}

export interface UnitDay extends Day {
    id : string
}

export interface Days {
    [key : string] : UnitDay
}