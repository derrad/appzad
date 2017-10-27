export interface IKonstantaModel {
    _id:string;
    Datum:Date;
    UcPenz:Number;
    UcZdrav:Number;
    UcNormTr:Number;
    UcOlak:Number;
    UcPorez:Number;
    Pdv:Number;
    Clanarin:Number;
    OsPorez:Number;
    OsUmanjen:Number;
    OsPio1:Number;
    OsPio2:Number;
    OsZdrav1:Number;
    OsZdrav2:Number;
    OsNez1:Number;
    OsNez2:Number;
    OsMinOsDop:Number;
    OsMaxOsDop:Number;
    Opis?: string;
    NameUser?: string;
    created_at?:Date;
    updatedAt?:Date;
}
    

export class KonstantaModel implements IKonstantaModel {
    _id:string;
    Datum:Date;
    UcPenz:Number;
    UcZdrav:Number;
    UcNormTr:Number;
    UcOlak:Number;
    UcPorez:Number;
    Pdv:Number;
    Clanarin:Number;
    OsPorez:Number;
    OsUmanjen:Number;
    OsPio1:Number;
    OsPio2:Number;
    OsZdrav1:Number;
    OsZdrav2:Number;
    OsNez1:Number;
    OsNez2:Number;
    OsMinOsDop:Number;
    OsMaxOsDop:Number;
    Opis?: string;
    NameUser?: string;
    created_at?:Date;
    updatedAt?:Date;
}