import { Serializable } from './Serizable';



export class RestCustom extends  Serializable {
    success:boolean;
    message: string;
    data: Array<Object>;
}

export class ErrorReq  extends  Serializable{
    _body:RestCustom;
    status: Number;
    ok:boolean;
    statusText: string;
    headers:any;
    type:Number;
    url: string;
    
    getPorukaG():string{
        return 'PORUKA IZ ErrorReq  a hvatam status text' + this.statusText;
    }
    

}