export interface IParametar {
    _id: string;
    Naziv: string;
    Koristi: boolean;
    VredString: string;
    VredNumeric: number;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}

export class Parametar implements IParametar {
    _id: string;
    Naziv: string;
    Koristi: boolean;
    VredString: string;
    VredNumeric: number;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}
