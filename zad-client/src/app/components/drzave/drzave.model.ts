// import { IDrzave } from './drzave.model';
export interface IDrzave {
    KodDrzave: string;
    Naziv: string;
    EuClan: boolean;
    Opis?: string;
    NameUser?: string;
}

export class Drzave implements IDrzave{
    KodDrzave: string;
    Naziv: string;
    EuClan: boolean;
    Opis?: string;
    NameUser?: string;
}