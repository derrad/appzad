export class PAdresaModel {
    AdUlica: string;
    AdBroj: string;
    AdMesto: string;
    AdPttReon: string;
    AdPttPak: string;
    AdDrzava: string;
}

export class PAZiroModel {
    PzNaziv: string;
    PzRacun: string;
    PzGlavni: boolean;
    PzOpis?: string;
}

export class PATelefonModel {
    TlNaziv: string;
    TlBroj: string;
    TlGlavni: boolean;
    TlOpis?: string;
}

export class PAKontaktModel {
    KoNaziv: string;
    KoFunkcija: string;
    KoEmail: string;
    KoTelef: string;
    KoMobilni: string;
    KoOpis?: string;
}


export class PartnerModel {
    _id: string;
    KyeSearch: string;
    Naziv: string;
    UgovProc: Number;
    Drzava: Object;
    Aktivan: boolean;
    Adresa: PAdresaModel;
    Email: string;
    Pib: string;
    MatBroj: string;
    SifDelat: string;
    PdvBroj: string;
    Ziro:  PAZiroModel[];
    Telefon:  PATelefonModel[];
    Kontakt:  PAKontaktModel[];
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;

}

export class PickPartnerModel {
    _id: string;
    KyeSearch: string;
    Naziv: string;
    Adresa: Object;
    Pib: string;
}
