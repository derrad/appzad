export class ServiceConfig {

    private _hosturl:string = "http://localhost:3000/";
    get  hosturl(): string {
        return this._hosturl;
    }

    static  hosturl : string= "http://localhost:3000/";


}