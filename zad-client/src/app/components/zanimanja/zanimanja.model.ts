export interface IZanimanjaModel {
    _id: string;
    Sifra: string;
    Naziv: string;
    StepenSS: string;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}

export class ZanimanjaModel implements IZanimanjaModel {
    _id: string;
    Sifra: string;
    Naziv: string;
    StepenSS: string;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}

export class PickZanimanjaModel {
    _id: string;
    Sifra: string;
    Naziv: string;
    StepenSS: string;
}



