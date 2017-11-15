export interface IUserModel {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    Aktivan: boolean;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
 }

export class UserModel  implements IUserModel {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    Aktivan: boolean;
    Opis?: string;
    NameUser?: string;
    created_at?: Date;
    updatedAt?: Date;
}
