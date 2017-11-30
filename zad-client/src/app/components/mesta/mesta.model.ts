export interface IMesta {
    _id: string;
    Opstina: Object;
    OpstinaRef: Object;
    DrzavaRef: Object;
    Naziv: string;
    Ptt: string;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}

export class Mesta implements IMesta {
    _id: string;
    Opstina: Object;
    OpstinaRef: Object;
    DrzavaRef: Object;
    Naziv: string;
    Ptt: string;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}

export class PickMesta {
    _id: string;
    OpstinaRef: Object;
    DrzavaRef: Object;
    Naziv: string;
}
