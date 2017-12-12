export interface IKonstantaModel {
    _id: string;
    Datum: Date;
    UcPenz: number;
    UcZdrav: number;
    UcNormTr: number;
    UcOlak: number;
    UcPorez: number;
    Pdv: number;
    Clanarin: number;
    OsPorez: number;
    OsUmanjen: number;
    OsPio1: number;
    OsPio2: number;
    OsZdrav1: number;
    OsZdrav2: number;
    OsNez1: number;
    OsNez2: number;
    OsMinOsDop: number;
    OsMaxOsDop: number;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}

export class KonstantaModel implements IKonstantaModel {
    _id: string;
    Datum: Date;
    UcPenz: number;
    UcZdrav: number;
    UcNormTr: number;
    UcOlak: number;
    UcPorez: number;
    Pdv: number;
    Clanarin: number;
    OsPorez: number;
    OsUmanjen: number;
    OsPio1: number;
    OsPio2: number;
    OsZdrav1: number;
    OsZdrav2: number;
    OsNez1: number;
    OsNez2: number;
    OsMinOsDop: number;
    OsMaxOsDop: number;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}
