export class Serializable {
        fromJSON(json) {
        // tslint:disable-next-line:forin
        for (const propName in json) {
                this[propName] = json[propName];
            }
            return this;
        }
}
// https://stackoverflow.com/questions/36014161/angular2-http-get-cast-response-into-full-object
// https://stackoverflow.com/questions/29758765/json-to-typescript-class-instance/29759472#29759472
