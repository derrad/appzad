export const ServiceConfig = {
    HostUrl: 'http://localhost:3000/',
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
