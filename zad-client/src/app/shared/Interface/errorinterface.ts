import { Serializable} from './Serizable'



// interface IRestCustom {
//     success:boolean;
//     message: string;
//     data: Array<Object>;
//     ver?:string;
// }

// export interface IErrorReq {
//     _body:IRestCustom;
//     status: Number;
//     ok:boolean;
//     statusText: string;
//     headers:any;
//     type:Number;
//     url: string;
   
//  }

// class Serializable {
//     //  fillFromJSON(json: string) {
//     //      var jsonObj = JSON.parse(json);
//     //      for (var propName in jsonObj) {
//     //          this[propName] = jsonObj[propName]
//     //      }
//     // }
//      fillfromJSON(json) {
//           for (var propName in json)
//               this[propName] = json[propName];
//           return this;
//       }extends Serializable
// }


class IRestCustom {
    success:boolean;
    message: string;
    data: Array<Object>;
    ver?:string;
}

 export class ErrorReq  {
    _body:IRestCustom;
    status: Number;
    ok:boolean;
    statusText: string;
    headers:any;
    type:Number;
    url: string;
    //Get_body(): IRestCustom { return this._body }
  
    getPorukaG():string{
        return 'PORUKA IZ ErrorReq ';
    }
    //Getstatus:Number { return this.status}

    // fromJSON(json) {
    //     for (var propName in json)
    //         this[propName] = json[propName];
    //     return this;
    // }

}