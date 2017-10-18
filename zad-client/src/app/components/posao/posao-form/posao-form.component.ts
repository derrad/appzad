import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
//import { KeysPipe } from './../../../shared/PipeApp/keys.pipe';
import {StepenSS} from './../../../shared/EnumApp/StepenSS.enum';

@Component({
  selector: 'app-posao-form',
  templateUrl: './posao-form.component.html',
  styleUrls: ['./posao-form.component.css']
  //pipes: [KeysPipe]
  
})
export class PosaoFormComponent implements OnInit {

  strSprema = StepenSS;


  constructor() { }

  ngOnInit() {
  }

}

//https://stackoverflow.com/questions/35750059/select-based-on-enum-in-angular2
// <select>
// <option *ngFor="let item of strSprema | keys" [value]="item.key">{{item.value}}</option>
// </select>
