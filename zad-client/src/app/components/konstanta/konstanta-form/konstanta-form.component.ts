import { Component, OnInit, Directive } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {formsTransition} from '../../../animation/forms.animations'
import { KonstantaService } from '../konstanta.service';
import { KonstantaModel } from '../konstanta-model';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom}  from './../../../shared/models/ErrorRes';
//import {MyDateInput} from '../../../shared/frmDatum/date.input';

@Component({
  selector: 'app-konstanta-form',
  templateUrl: './konstanta-form.component.html',
  styleUrls: ['./konstanta-form.component.css'],
  animations: [formsTransition()]
  
  
})
export class KonstantaFormComponent implements OnInit {
  formKonst: FormGroup;
  title: string;
  konstN : KonstantaModel = new KonstantaModel();

  constructor(private konstService:KonstantaService, private router:Router,private route: ActivatedRoute, 
    formBuilder: FormBuilder ,private _location: Location,private flashMessage:FlashMessagesService,
    private serValidate:ServiceValidateShared) { 

      this.formKonst = formBuilder.group({
        _id:[],
        Ime:['',[Validators.required]],
        UcPenz: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        UcZdrav: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        UcNormTr: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        UcOlak: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        UcPorez: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        Pdv: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        Clanarin: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        OsPorez: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        OsUmanjen: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        OsPio1: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        OsPio2: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        OsZdrav1: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        OsZdrav2: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        OsNez1: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        OsNez2: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        OsMinOsDop: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        OsMaxOsDop: ['', [
          Validators.required,serValidate.minValue(0)
        ]],
        Opis: []
      });
  }


  get Datum() { return this.formKonst.get('Datum'); }
  // set Datum(value:Date) { 
  //     this.formKonst.setValue(value); 
  // }
  get UcPenz() { return this.formKonst.get('UcPenz'); }
  get UcZdrav() { return this.formKonst.get('UcZdrav'); }
  get UcNormTr() { return this.formKonst.get('UcNormTr'); }
  get UcOlak() { return this.formKonst.get('UcOlak'); }
  get UcPorez() { return this.formKonst.get('UcPorez'); }
  get Pdv() { return this.formKonst.get('Pdv'); }
  get Clanarin() { return this.formKonst.get('Clanarin'); }
  get OsPorez() { return this.formKonst.get('OsPorez'); }
  get OsUmanjen() { return this.formKonst.get('OsUmanjen'); }
  get OsPio1() { return this.formKonst.get('OsPio1'); }
  get OsPio2() { return this.formKonst.get('OsPio2'); }
  get OsZdrav1() { return this.formKonst.get('OsZdrav1'); }
  get OsZdrav2() { return this.formKonst.get('OsZdrav2'); }
  get OsNez1() { return this.formKonst.get('OsNez1'); }
  get OsNez2() { return this.formKonst.get('OsNez2'); }
  get OsMinOsDop() { return this.formKonst.get('OsMinOsDop'); }
  get OsMaxOsDop() { return this.formKonst.get('OsMaxOsDop'); }
  

  ngOnInit() {

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Ažuriranje Konstante' : 'Nova konstanta';

      if (!id){
         return;
      }

      this.konstService.getKonstanta(id)
        .subscribe(
          (pos) =>{
            if(pos.success){
               this.konstN = pos.data[0];
              // this.formKonst.setValue(this.konstN.Datum.toLocaleDateString);
              // var datePipe = new DatePipe();
              // this.setDob = datePipe.transform(userdate, 'dd/MM/yyyy');
              //console.log("Prikazan datum je " + this.konstN.Datum.toString());
              //this.konstN.Datum = new Date(this.getExcatDate(this.konstN.Datum.toString()));
              // this.getExcatDate(this.konstN.Datum.toString());
              //this.konstN.Datum = new Date();
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


  validateOnlyNumbers(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  save() {
    var FormValue = this.formKonst.value;
      
    if (FormValue._id){
       this.konstService.updateKonstanta(FormValue).subscribe(
        (pos) =>{
          if(pos.success){
           
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['konstanta'])
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

      this.konstService.addKonstanta(FormValue)
      .subscribe(
        (pos) =>{
          if(pos.success){
           
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['konstanta'])
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
    this.formKonst.reset({
      Datum: "",
      UcPenz: 0,
      UcZdrav:0,
      UcNormTr:0,
      UcOlak:0,
      UcPorez:0,
      Pdv:0,
      Clanarin:0,
      OsPorez:0,
      OsUmanjen:0,
      OsPio1:0,
      OsPio2:0,
      OsZdrav1:0,
      OsZdrav2:0,
      OsNez1:0,
      OsNez2:0,
      OsMinOsDop:0,
      OsMaxOsDop:0,
      Opis:""
    });
}

getExcatDate(string){
   //let year=new Date(this.konstN.Datum.toString()).getFullYear();
  // let month=new Date(this.konstN.Datum.toString()).getMonth();
   //let date=new Date(this.konstN.Datum.toString()).getDate();
  //  let year= this.konstN.Datum.getFullYear();
  //  let month= this.konstN.Datum.getMonth();
   let date  = new Date().getDay() ;
  // console.log(" datum iz konstante " + date);
   let year=  new Date().getFullYear();//date.getFullYear();
   let month= new Date().getMonth();
   
  let local= ( date.toString().length===1 ?  '0' + date : date) + '/' +
              ( month.toString().length===1 ?  '0' +month : month) 
               + '/' +  year.toString().substring(0);


  console.log(" proba local "  + local);
  this.konstN.Datum= new Date(local);
  return local;
}

}
