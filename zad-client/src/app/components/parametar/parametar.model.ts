// import { IParametar } from './parametar.model';

export interface IParametar {
    Naziv: string;
    Koristi: boolean;
    VredString: string;
    VredNumeric: number;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
}

export class Parametar implements IParametar {
    Naziv: string;
    Koristi: boolean;
    VredString: string;
    VredNumeric: number;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
}
