// import { IDrzave } from './drzave.model';
export interface IDrzave {
    _id: string;
    KodDrzave: string;
    Naziv: string;
    EuClan: boolean;
    Opis?: string;
    NameUser?: string;
}
export class Drzave implements IDrzave {
    _id: string;
    KodDrzave: string;
    Naziv: string;
    EuClan: boolean;
    Opis?: string;
    NameUser?: string;
}

export class PickDrzave  {
    _id: string;
    KodDrzave: string;
    Naziv: string;
}
