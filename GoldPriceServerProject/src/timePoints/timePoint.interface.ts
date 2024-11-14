export interface TimePoint {
    date : string,
    timestamp : number,
    goldPricerice : string;
    silverPrice : string;
    platiniumPrice : string;
    palladiumPrice : string;
}

export interface UnitTimePoint extends TimePoint {
    id : string
}

export interface TimePoints {
    [key : string] : UnitTimePoint
}