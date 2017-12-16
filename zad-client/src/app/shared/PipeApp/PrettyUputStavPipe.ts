import { Pipe, PipeTransform } from '@angular/core';
import {UputStavNew} from '../../components/uput/uput.model';

import * as $ from 'jquery';
@Pipe({
    name: 'prettyuputstav'
  })
  export class PrettyUputStavPipe implements PipeTransform {
    transform(val, args: string[]): any  {
           if (val) {
           return this.GetTable(val);
        }else {
            return '';
        }
    }


   private GetTable(tUputStav: UputStavNew[]): string {
        let table: string;

        let html = '<table class="table  table-hover table-condensed">';

        html += '<thead>';
        html += '<tr>';
        html += '<th class="col-md-1"><p class="text-left">Rbr</p></th>';
        html += '<th class="col-md-1"><p class="text-left">IdZad</p></th>';
        html += '<th class="col-md-3"><p class="text-left">Zadrugar</p></th>';
        html += '<th class="col-md-2"><p class="text-center">TipZad</p></th>';
        html += '<th class="col-md-3"><p class="text-left">Posao</p></th>';
        html += '</tr>';
        html += '</thead>';
        html += '<tbody>';
        tUputStav.forEach(element => {
            html += '<tr>';
            html += '<td class="col-md-1">' + element.Rbr + '</td>';
            html += '<td class="col-md-1">' + element.ZadRef.idzadrugar + '</td>';
            html += '<td class="col-md-3">' + element.ZadRef.name + '</td>';
            html += '<td class="col-md-2"> <p class="text-center">' + element.ZadRef.tipzadrugar + '</p></td>';
            html += '<td class="col-md-3"><p>' + element.PosloviRef.name + '</p></td>';
            html += '</tr>';
        });
        html += '</tbody>';
        html += '</table>';
        table = html;
        return table;
      }


  }



// $(function(){

//     var jsonObj = $.parseJSON('{"a":1,"b":3,"ds":4}');
//     var html = '<table border="1">';
//     $.each(jsonObj, function(key, value){
//         html += '<tr>';
//         html += '<td>' + key + '</td>';
//         html += '<td>' + value + '</td>';
//         html += '</tr>';
//     });
//     html += '</table>';

//     $('div').html(html);
// });

// https://stackoverflow.com/questions/20467785/how-to-convert-json-object-to-html-data
// https://stackoverflow.com/questions/37308420/angular-2-pipe-that-transforms-json-object-to-pretty-printed-json
