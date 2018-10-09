export const ServiceConfig = {
     HostUrl: 'http://localhost:3000/',
   // HostUrl: 'http://apizad.com/',
    PrepareHost: function(tisDev, endPoint){
        if (this.isDev) {
            return endPoint;
          } else {
            // return 'http://localhost:8080/'+ep;
            return ServiceConfig.HostUrl + endPoint;
          }
    },
    isDev: false
  };
