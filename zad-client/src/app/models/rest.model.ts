export interface IRest {
    success:boolean;
    message: string;
    data: Array<Object>;
    ver?:string;
}

export class Rest implements IRest{
    success:boolean;
    message: string;
    data: Array<Object>;
    ver?:string;
}