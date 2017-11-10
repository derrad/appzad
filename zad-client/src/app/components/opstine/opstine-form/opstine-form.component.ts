import { LoginComponent } from './../../login/login.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Drzave} from '../../drzave/drzave.model'
import {DrzaveService} from '../../drzave/drzave.service';
import {OpstineService } from '../opstine.service';
import {Opstine} from '../opstine.model';
import {Location} from '@angular/common';
import {formsTransition} from '../../../animation/forms.animations'


@Component({
  selector: 'app-opstine-form',
  templateUrl: './opstine-form.component.html',
  styleUrls: ['./opstine-form.component.css'],
  animations: [formsTransition()]
})
export class OpstineFormComponent implements OnInit {

  formOPST: FormGroup;
  title: string;
  opstina: Opstine = new Opstine();
  drzave: Array<Drzave>;
  titleAlertNaziv = 'Naziv,This field is required !!!';
  titleAlertRegOzn = 'Regionalna oznaka, This field is required !!!';


  constructor(private opstService: OpstineService,
              private drzaveService: DrzaveService, private router: Router, private route: ActivatedRoute,
              formBuilder: FormBuilder, private _location: Location) {

                this.formOPST = formBuilder.group({
                  _id:[],
                  Drzava:['',[Validators.required]],
                  RegOzn: ['', [
                    Validators.required,
                    Validators.maxLength(50)
                  ]],
                  Naziv: ['', [
                    Validators.required
                  ]],
                  SifPorez:[],
                  KontBr:[],
                  PozivNaBr:[],
                  Opis: []
                });

     }

  ngOnInit() {
    this.drzaveService.getDrzave().subscribe(profile => {
      if (profile.success === true) {
        // console.log(profile);
        // console.log(" data je " + profile.data);
        this.drzave = profile.data;
       }
    },
    err => {
      console.log(err);
      return false;
    });

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Ažuriranje opštine' : 'Nova opština';

      if (!id)
        return;

      this.opstService.getOpstina(id)
        .subscribe(
          (opstina) =>{
            if(opstina.success){
              this.opstina = opstina.data[0];
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
        opstineValue = this.formOPST.value;

      console.log(opstineValue.Drzava);
    if (opstineValue._id){
      result = this.opstService.updateOpstine(opstineValue);
    } else {
      result = this.opstService.addOpstine(opstineValue);
    }

    result.subscribe(data => this.router.navigate(['opstine']));
  }


  backClicked(event: any) {
    this._location.back();
    //event.stopPropagation();
    
  }

  revert() { this.ngOnChanges(); }
  
  ngOnChanges() {
    this.formOPST.reset({
      Naziv: "",
      RegOzn:"",
      SifPorez:"",
      KontBr:"",
      PozivNaBr:"",
      Opis:""
    });


}

}
