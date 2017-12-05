export class UputStavModel {
    _id: string;
    IDZadrugar: Number;
    Rbr: Number;
    ZadrugarID: Object;
    ZadRef: Object;
    PosloviRef: Object;
    TipZadrugar: string;
    PosloviID: string;
    OdDatuma: Date;
    DoDatuma: Date;
    Kolicina: Number;
    JedMer: string;
    Cena: Number;
    Opis?: string;
}
class ZadRefModel {
    _id: string ;
    name: string;
    tipzadrugar: string;
    idzadrugar: Number;
}
class PosloviRef {
    _id:  string;
    name:  string;
    stepenss:  string;
}

export class UputStavNew {
    _id: string;
    IDZadrugar: Number;
    Rbr: Number;
    ZadrugarID: Object;
    ZadRef: ZadRefModel;
    PosloviRef: PosloviRef;
    TipZadrugar: string;
    PosloviID: string;
    OdDatuma: Date;
    DoDatuma: Date;
    Kolicina: Number;
    JedMer: string;
    Cena: Number;
    Opis?: string;
}

export class UputRacVlasnikModel {
    Naziv: string;
    Racun: string;
}

export class UputModel {
    _id: string;
    PartneriID: Object;
    PartnerRef: Object;
    TipDok?: string;
    Datum: Date;
    Knjizeno: boolean;
    Storno: boolean;
    Broj: Number;
    Godina: Number;
    RacVlasnika: UputRacVlasnikModel;
    // RacVlasnika: Object;
    PosloviID: Object;
    PosloviRef: Object;
    Stavke: [UputStavModel];
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}


export class UputBrojGodina {
    broj: Number;
    godina: Number;
}

export class PosaoNG {
    id: string;
    text: string;
}
