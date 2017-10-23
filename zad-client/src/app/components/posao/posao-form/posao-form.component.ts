//import { KeysPipe } from './../../../shared/PipeApp/keys.pipe';
import {StepenSS} from './../../../shared/EnumApp/StepenSS.enum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { routerTransition } from '../../../animation/router.animations' 
import { Posao } from './../posao.model';
import { PosaoService } from './../posao.service';

@Component({
  selector: 'app-posao-form',
  templateUrl: './posao-form.component.html',
  styleUrls: ['./posao-form.component.css'],
  animations: [routerTransition()]
  //pipes: [KeysPipe]
  
})
export class PosaoFormComponent implements OnInit {

  formPOSAO: FormGroup;
  title: string;
  posaoN : Posao = new Posao();
  titleAlertNaziv:string ="Naziv,This field is required !!!";
  strSprema = StepenSS;


  constructor(private posService:PosaoService, private router:Router,private route: ActivatedRoute, 
    formBuilder: FormBuilder ,private _location: Location) { 

      this.formPOSAO = formBuilder.group({
        _id:[],
        StepenSS:['',[Validators.required]],
        Naziv: ['', [
          Validators.required
        ]],
        Skola: [],
        Sifra:[],
        Sifra1:[],
        Opis: []
      });
    }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Ažuriranje posla' : 'Novi posao';

      if (!id)
        return;

      this.posService.getPosao(id)
        .subscribe(
          (pos) =>{
            if(pos.success){
              this.posaoN = pos.data[0];
            }else{
              this.router.navigate(['NotFound']);
            }
          } ,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }


  backClicked(event: any) {
    this._location.back();
    //event.stopPropagation();
    
  }

  save() {
    var result,
        posValue = this.formPOSAO.value;

      
    if (posValue._id){
      result = this.posService.updatePosao(posValue);
    } else {
      result = this.posService.addPosao(posValue);
    }

    result.subscribe(data => this.router.navigate(['posao']));
  }

  revert() { this.ngOnChanges(); }
  
  ngOnChanges() {
    this.formPOSAO.reset({
      Naziv: "",
      Skola:"",
      Sifra:"",
      Sifra1:"",
      Opis:""
    });


}

}

//https://stackoverflow.com/questions/35750059/select-based-on-enum-in-angular2
// <select>
// <option *ngFor="let item of strSprema | keys" [value]="item.key">{{item.value}}</option>
// </select>
