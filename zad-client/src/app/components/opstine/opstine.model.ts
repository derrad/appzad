export interface IOpstine {
    _id: string;
    Drzava: Object;
    DrzavaRef: Object;
    RegOzn: string;
    Naziv: string;
    SifPorez: string;
    KontBr: string;
    PozivNaBr: string;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}

export class Opstine implements IOpstine {
    _id: string;
    Drzava: Object;
    DrzavaRef: Object;
    RegOzn: string;
    Naziv: string;
    SifPorez: string;
    KontBr: string;
    PozivNaBr: string;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}

export class PickOpstine {
    _id: string;
    DrzavaRef: Object;
    RegOzn: string;
    Naziv: string;
}
