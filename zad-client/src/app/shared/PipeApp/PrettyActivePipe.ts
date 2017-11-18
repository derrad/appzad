import { Pipe, PipeTransform } from '@angular/core';
// import * as $ from 'jquery';
@Pipe({
    name: 'prettyavtiveprint'
  })
export class PrettyActivePipe implements PipeTransform {
    transform(val, args: string[]): any  {
        // const lepi = JSON.stringify(val, null, 2);
        // console.log('lepi string -' + lepi);
        // if (val) {
            if (typeof(val) === 'boolean') {
              if (val) {
                return 'DA';
              } else {
                return 'NE';
              }

            }else {
              return '';
            }
        // }else {
        //     return '';
        // }
   }
}
