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