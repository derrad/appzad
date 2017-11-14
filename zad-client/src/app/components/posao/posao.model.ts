export interface IPosaoModel {
    _id: string;
    StepenSS: string;
    Naziv: string;
    Skola: string;
    Sifra: string;
    Sifra1: string;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
 }

 export class Posao  implements IPosaoModel {
    _id: string;
    StepenSS: string;
    Naziv: string;
    Skola: string;
    Sifra: string;
    Sifra1: string;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}
