// import { IDrzave } from './drzave.model';
export interface IDrzave {
  //  DrzaveID: number;
    _id: string;
    KodDrzave: string;
    Naziv: string;
    EuClan: boolean;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;

}
export class Drzave implements IDrzave {
 //   DrzaveID: number;
    _id: string;
    KodDrzave: string;
    Naziv: string;
    EuClan: boolean;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;

}

export class PickDrzave {
    _id: string;
    KodDrzave: string;
    Naziv: string;
}
