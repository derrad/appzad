import { Serializable } from './Serizable';



export class ResponeCustom extends  Serializable {
    success:boolean;
    message: string;
    data: Array<Object>;
}

export class ErrorRespone  extends  Serializable{
    _body:ResponeCustom;
    status: Number;
    ok:boolean;
    statusText: string;
    headers:any;
    type:Number;
    url: string;

}

// export interface IRest {
//     success:boolean;
//     message: string;
//     data: Array<Object>;
//     ver?:string;
// }

// export class Rest implements IRest{
//     success:boolean;
//     message: string;
//     data: Array<Object>;
//     ver?:string;
// }