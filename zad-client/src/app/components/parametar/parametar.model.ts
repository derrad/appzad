export interface IParametar {
    Naziv: string;
    Koristi: boolean;
    VredString: string;
    VredNumeric: Number;
    Opis?: string;
    NameUser?: string;
    created_at?:Date;
}