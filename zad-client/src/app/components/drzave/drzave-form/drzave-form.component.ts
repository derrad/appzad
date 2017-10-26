import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Drzave} from '../drzave.model';
import { DrzaveService } from '../drzave.service';
import {Location} from '@angular/common';
import {formsTransition } from '../../../animation/forms.animations' 

@Component({
  selector: 'app-drzave-form',
  templateUrl: './drzave-form.component.html',
  styleUrls: ['./drzave-form.component.css'],
  animations: [ formsTransition()]
})
export class DrzaveFormComponent implements OnInit {

  formDR: FormGroup;
  title: string;
  drzava: Drzave = new Drzave();
  titleAlertNaziv:string ="This field is required !!!";
  titleAlertKod:string ="KOD-ima jos, This field is required !!!";


  constructor(private drzaveService:DrzaveService, private router:Router,private route: ActivatedRoute, 
    formBuilder: FormBuilder,private _location: Location) { 

    this.formDR = formBuilder.group({
      _id:[],
      KodDrzave: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3)
      ]],
      EuClan:[],
      Naziv: ['', [
        Validators.required
      ]],
      Opis: []
    });


  }

  ngOnInit() {


    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Ažuriranje Države' : 'NOVA Država';

      if (!id)
        return;

      this.drzaveService.getDrzava(id)
        .subscribe(
          (drzava) =>{
            if(drzava.success){
              this.drzava = drzava.data[0];
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



  save() {
    var result,
        drzaveValue = this.formDR.value;

    if (drzaveValue._id){
      result = this.drzaveService.updateDrzava(drzaveValue);
    } else {
      result = this.drzaveService.addDrzava(drzaveValue);
    }

    result.subscribe(data => this.router.navigate(['drzave']));
  }

  backClicked(event: any) {
    this._location.back();
    //event.stopPropagation();
    
  }

  revert() { this.ngOnChanges(); }
  
  ngOnChanges() {
    this.formDR.reset({
      KodDrzave:"",
      Naziv: "",
      EuClan:0,
      Opis:""
    });

    
  }


}
