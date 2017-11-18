import { Pipe, PipeTransform } from '@angular/core';
import * as $ from 'jquery';
@Pipe({
    name: 'prettyprint'
  })
  export class PrettyPrintPipe implements PipeTransform {
    transform(val, args: string[]): any  {
        // const lepi = JSON.stringify(val, null, 2);
        // console.log('lepi string -' + lepi);
        if (val) {
           // return lepi.replace(' ', '&nbsp;').replace('\n', '<br/>');
           return GetJsonTable(JSON.stringify(val));
            // return JSON.stringify(val, null, 2)
            //     .replace('"', '')
            //     .replace(':', '-')
            //     .replace(' ', '&nbsp;')
            //     .replace('\n', '<br/>');
        }else {
            return '';
        }
    //   return JSON.stringify(val, null, 2)
    //     .replace(' ', '&nbsp;')
    //     .replace('\n', '<br/>');
    }

  }

  function GetJsonTable(myJson): string {
    let table: string;
    const jsonObj = $.parseJSON(myJson);
    let html = '<table>';
    $.each(jsonObj, function(key, value){
                if (typeof value !== 'object') {
                  if (key !== '_id') {
                    html += '<tr>';
                    //  html += '<td>' + key + '</td>';
                    html += '<td>' + value + '</td>';
                    html += '</tr>';
                  }
                }else {
                  const valueObj = $.parseJSON(JSON.stringify(value));
                  $.each(valueObj, function(key1, value1){
                    if (key1 !== '_id') {
                      html += '<tr>';
                      //  html += '<td>' + key + '</td>';
                      html += '<td>' + value1 + '</td>';
                      html += '</tr>';
                    }
                  });

                }
             });
    html += '</table>';
    table = html;
    return table;
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
