export interface IRadnikModel {
    _id: string;
    SifraRad: string;
    Ime: string;
    Prezime: string;
    Jmbg: string;
    Aktivan: boolean;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
 }

export class Radnik  implements IRadnikModel {
    _id: string;
    SifraRad: string;
    Ime: string;
    Prezime: string;
    Jmbg: string;
    Aktivan: boolean;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}
