

// export class Serializable {
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
//       }
// }


export class Serializable {
       
        fromJSON(json) {
            console.log("Klasa Serializable primila " + json);
            for (var propName in json){
                this[propName] = json[propName];
                console.log(" propName" +  propName)
                
                // console.log(" this[propName]" +  this[propName])
                // console.log(" json[propName]" +  json[propName])
            }
            return this;
        }

        getTextP():string{
            return 'PORUKA iz Serializable';
        }
}


//https://stackoverflow.com/questions/36014161/angular2-http-get-cast-response-into-full-object
//https://stackoverflow.com/questions/29758765/json-to-typescript-class-instance/29759472#29759472