export const ServiceConfig = {
    HostUrl: "http://localhost:3000/",
    PrepareHost:function(tisDev,endPoint){

        if(this.isDev){
            return endPoint;
          } else {
            //return 'http://localhost:8080/'+ep;
            return ServiceConfig.HostUrl + endPoint;
          }

        //return 'HOST PREPARE' + ServiceConfig.HostUrl;
    },
    isDev:false
  };


// export class ServiceConfig {

//     private _hosturl:string = "http://localhost:3000/";
//     get  hosturl(): string {
//         return this._hosturl;
//     }

//     static  hosturl : string= "http://localhost:3000/";


// }