import { Component, OnInit, Directive } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {formsTransition} from '../../../animation/forms.animations'
import { VlasnikService } from '../vlasnik.service';
import { VlasnikModel } from '../vlasnik-model';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom}  from './../../../shared/models/ErrorRes';
//https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2


@Component({
  selector: 'app-vlasnik-form',
  templateUrl: './vlasnik-form.component.html',
  styleUrls: ['./vlasnik-form.component.css'],
  animations: [formsTransition()]
  
})
export class VlasnikFormComponent implements OnInit {
  formVlasn: FormGroup;
  title: string;
  vlasnN : VlasnikModel = new VlasnikModel();


  constructor(private vlasnService:VlasnikService, private router:Router,private route: ActivatedRoute, 
    private _fb: FormBuilder ,private _location: Location,private flashMessage:FlashMessagesService,
    private serValidate:ServiceValidateShared) { 

      this.formVlasn = this._fb.group({
        _id:[],
        Ime: ['', [
          Validators.required,
          Validators.minLength(2)
        ]],
        Adresa:['',[Validators.required,Validators.minLength(2)]],
        Mesto: ['', [Validators.required,Validators.minLength(2)]],
        PttReon:[''],
        PttPak:[''],
        Direktor:[''],
        KomRukovac:[''],
        Blagajnik:[''],
        Pib:[''],
        MatBroj:[''],
        SifDelat:[''],
        PdvBroj:[''],
        Slika:[''],
        Sud:[''],
        UplRacPorJed:[''],
        NazPorJed:[''],
        ZiroVlasnik:this._fb.array([
          this.initZiroVlas()
        ]),
        TelefVlasnik:this._fb.array([
          // this.initZiroVlas(),
        ]),
        Opis: ['']
      });
  }

  get Ime() { return this.formVlasn.get('Ime'); }
  get Adresa() { return this.formVlasn.get('Adresa'); }
  get Mesto() { return this.formVlasn.get('Mesto'); }
  

//Ziro racun vlasnika
initZiroVlas() {
    return this._fb.group({
        Naziv: ['', Validators.required],
        Racun: ['', Validators.required],
        Glavni:[''],
        Opis: ['']
   });
}
addZiroVlas() {
    const control = <FormArray>this.formVlasn.controls['ZiroVlasnik'];
    control.push(this.initZiroVlas());
}
removeZiroVlas(i: number) {
    const control = <FormArray>this.formVlasn.controls['ZiroVlasnik'];
    control.removeAt(i);
}
//Kraj ziro racuna
//Telefon
initTelVlas() {
  return this._fb.group({
      Naziv: ['', Validators.required],
      Telefon: ['', Validators.required],
      Glavni:[''],
      Opis: ['']
 });
}
addATelVlas() {
  const control = <FormArray>this.formVlasn.controls['TelefVlasnik'];
  control.push(this.initTelVlas());
}
removeTelVlas(i: number) {
  const control = <FormArray>this.formVlasn.controls['TelefVlasnik'];
  control.removeAt(i);
}
//Kraj telefona



  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Ažuriranje vlasnika' : 'Novi vlasnik';

      if (!id){
         return;
      }

      this.vlasnService.getVlasnik(id)
        .subscribe(
          (pos) =>{
            if(pos.success){
               this.vlasnN = pos.data[0];
            }else{
              this.flashMessage.show(pos.message, {
                cssClass: 'alert-danger',
                timeout: 9000});
              this.router.navigate(['NotFound']);
            }
          } ,
          (error:ResponeCustom) => {
            this.flashMessage.show(error.message, {
              cssClass: 'alert-danger',
              timeout: 9000});
            // if (error == 404 || error.status == 400 ) {
                this.router.navigate(['NotFound']);
            // }
          });
    });

  }


  save() {
    var FormValue = this.formVlasn.value;
      
    if (FormValue._id){
       this.vlasnService.updateVlasnik(FormValue).subscribe(
        (pos) =>{
          if(pos.success){
           
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['vlasnik'])
          }else{
            this.router.navigate(['NotFound']);
          }
        } ,
        (error:ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
         
        },
        
      );

    } else {

      this.vlasnService.addVlasnik(FormValue)
      .subscribe(
        (pos) =>{
          if(pos.success){
           
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['vlasnik'])
          }else{
            this.router.navigate(['NotFound']);
          }
        } ,
        (error:ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
                 
        },
        
      );
    }
  }


  
  backClicked(event: any) {
     this._location.back();
     
  }

  revert() { this.ngOnChanges(); }
  
  ngOnChanges() {
    this.formVlasn.reset({
      Ime: "",
      Adresa:"",
      Mesto: "",
      PttReon:'',
      PttPak:'',
      Direktor:'',
      KomRukovac:'',
      Blagajnik:'',
      Pib:'',
      MatBroj:'',
      SifDelat:'',
      PdvBroj:'',
      Slika:'',
      Sud:'',
      UplRacPorJed:'',
      NazPorJed:'',
      ZiroVlasnik:null,
      TelefVlasnik:null,
      Opis:""
    });
}


}
