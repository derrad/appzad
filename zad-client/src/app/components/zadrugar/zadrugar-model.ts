export class ZDAdresaModel {
    AdUlica: string;
    AdBroj: string;
    AdMesto: string;
    AdPttReon: string;
    AdPttPak: string;
    AdDrzava: string;
}


export class ZadrugarModel {
    _id: string;
    IDZadrugar: Number;
    Ime: string;
    Prezime: string;
    ImeRoditelja: string;
    DatRodjenja: Date;
    Aktivan: boolean;
    Pol: string;
    OpstinaRodj: string;
    MestoRodj: string;
    VrstaIdentifikatoraPrimaoca: string;
    Jmbg: string;
    Adresa: ZDAdresaModel;
    BrLK: string;
    Telefon: string;
    ZadEmail: string;
    MestaID: Object;
    ZanimanjaID: Object;
    TipZadrugar: string;
    BrRadneKnjiz: string;
    BrIndexa: string;
    TipIsplate: string;
    BankaID: Object;
    BrojRacuna: string;
    BeliBroj: string;
    BrojDana: string;
    Slika: string;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;

}