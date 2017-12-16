export interface IFondSati {
    _id: string;
    Mesec: number;
    Godina: number;
    Sati: number;
    MinOsnov: number;
    MaxOsnov: number;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}

export class FondSati implements IFondSati {
    _id: string;
    Mesec: number;
    Godina: number;
    Sati: number;
    MinOsnov: number;
    MaxOsnov: number;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}
