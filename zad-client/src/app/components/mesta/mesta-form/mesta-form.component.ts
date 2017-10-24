//import { LoginComponent } from './../../login/login.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Mesta } from './../mesta.model';
import { MestaService } from './../../../services/mesta/mesta.service';
import {Opstine} from '../../opstine/opstine.model';
import {Location} from '@angular/common';
import { routerTransition } from '../../../animation/router.animations' 
import { OpstineService} from './../../opstine/opstine.service';

@Component({
  selector: 'app-mesta-form',
  templateUrl: './mesta-form.component.html',
  styleUrls: ['./mesta-form.component.css'],
   animations: [routerTransition()]

})
export class MestaFormComponent implements OnInit {

  formMEST: FormGroup;
  title: string;
  mesto : Mesta = new Mesta();
  opstine: Array<Opstine>;
  titleAlertNaziv:string ="Naziv,This field is required !!!";
  

  constructor(private opstService:OpstineService,
    private mestaService:MestaService, private router:Router,private route: ActivatedRoute, 
    formBuilder: FormBuilder ,private _location: Location) { 


      this.formMEST = formBuilder.group({
        _id:[],
        Opstina:['',[Validators.required]],
        Naziv: ['', [
          Validators.required
        ]],
        Ptt:[],
        Opis: []
      });



    }

  ngOnInit() {

    this.opstService.getOpstine().subscribe(profile => {
      if (profile.success === true) { 
        // console.log(profile);
        // console.log(" data je " + profile.data);
        this.opstine = profile.data;
       }
      
    },
    err => {
      console.log(err);
      return false;
    }
    
  );

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Ažurianje mesta' : 'Novo mesto';

      if (!id)
        return;

      this.mestaService.getMesto(id)
        .subscribe(
          (mesto) =>{
            if(mesto.success){
              this.mesto = mesto.data[0];
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
        mestaValue = this.formMEST.value;

      console.log(mestaValue.Opstine);
    if (mestaValue._id){
      result = this.mestaService.updateMesto(mestaValue);
    } else {
      result = this.mestaService.addMesto(mestaValue);
    }

    result.subscribe(data => this.router.navigate(['mesta']));
  }

  revert() { this.ngOnChanges(); }
  
  ngOnChanges() {
    this.formMEST.reset({
      Naziv: "",
      Ptt:"",
      Opis:""
    });


}


}
