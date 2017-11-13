export class TelefVlasnikModel {
    Naziv: string;
    Telefon: string;
    Glavni: boolean;
    Opis?: string;
}

export class ZiroVlasnikModel {
    Naziv: string;
    Racun: string;
    Glavni: boolean;
    Opis?: string;
}


export interface IVlasnikModel {
    _id: string;
    ZiroVlasnik: ZiroVlasnikModel[];
    TelefVlasnik: TelefVlasnikModel[];
    Ime: string;
    Adresa: string;
    Glavni: string;
    Mesto: string;
    PttReon: string;
    PttPak: string;
    Direktor: string;
    KomRukovac: string;
    Blagajnik: string;
    Pib: string;
    MatBroj: string;
    SifDelat: string;
    PdvBroj: string;
    Slika: string;
    Sud: string;
    UplRacPorJed: string;
    NazPorJed: string;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}



export class VlasnikModel implements IVlasnikModel {
    _id:string;
    ZiroVlasnik:ZiroVlasnikModel[];  
    TelefVlasnik:TelefVlasnikModel[];
    Ime: string;
    Adresa:string;
    Glavni  : string;
    Mesto:string;
    PttReon:string;
    PttPak:string;
    Direktor:string;
    KomRukovac:string;
    Blagajnik:string;
    Pib:string;
    MatBroj:string;
    SifDelat:string;
    PdvBroj:string;
    Slika:string;
    Sud:string;
    UplRacPorJed:string;
    NazPorJed:string;
    Opis?: string;
    NameUser?: string;
    created_at?:Date;
    updatedAt?:Date;
}
