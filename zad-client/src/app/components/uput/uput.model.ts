export class UputStavModel {
    _id: string;
    IDZadrugar: number;
    Rbr: number;
    ZadrugarID: Object;
    ZadRef: Object;
    PosloviRef: Object;
    TipZadrugar: string;
    PosloviID: string;
    OdDatuma: Date;
    DoDatuma: Date;
    Kolicina: number;
    JedMer: string;
    Cena: number;
    Opis?: string;
}
class ZadRefModel {
    _id: string;
    name: string;
    tipzadrugar: string;
    idzadrugar: number;
}
class PosloviRef {
    _id: string;
    name: string;
    stepenss: string;
}

export class UputStavNew {
    _id: string;
    IDZadrugar: number;
    Rbr: number;
    ZadrugarID: Object;
    ZadRef: ZadRefModel;
    PosloviRef: PosloviRef;
    TipZadrugar: string;
    PosloviID: string;
    OdDatuma: Date;
    DoDatuma: Date;
    Kolicina: number;
    JedMer: string;
    Cena: number;
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
    Broj: number;
    Godina: number;
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
    broj: number;
    godina: number;
}

export class PosaoNG {
    id: string;
    text: string;
}
