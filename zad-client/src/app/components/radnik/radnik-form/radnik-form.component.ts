
import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {formsTransition} from '../../../animation/forms.animations'
import { Radnik } from '../radnik.model';
import { RadnikService} from '../radnik.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
//import { PlatformLocation } from '@angular/common'

@Component({
  selector: 'app-radnik-form',
  templateUrl: './radnik-form.component.html',
  styleUrls: ['./radnik-form.component.css'],
  animations: [formsTransition()]
})
export class RadnikFormComponent implements OnInit, OnDestroy  {
  formRAD: FormGroup;
  title: string;
  radnikN : Radnik = new Radnik();
  saveTemp:boolean = true;
   
  constructor(private radService:RadnikService, private router:Router,private route: ActivatedRoute, 
    formBuilder: FormBuilder ,private _location: Location,private flashMessage:FlashMessagesService,
    private serValidate:ServiceValidateShared ) {
      
      this.formRAD = formBuilder.group({
        _id:[],
        SifraRad:['',[Validators.required, Validators.minLength(4),Validators.maxLength(12),serValidate.validateRegExpSifru]],
        Ime: ['', [Validators.required,Validators.maxLength(100)]],
        Prezime: ['', [Validators.required,Validators.maxLength(100)]],
        Jmbg:[],
        Aktivan:[],
        Opis: []
      });
    }

  
  get SifraRad() { return this.formRAD.get('SifraRad'); }
  get Ime() { return this.formRAD.get('Ime'); }
  get Prezime() { return this.formRAD.get('Prezime'); }
  


  ngOnInit() {
   // this._location.subscribe(x => console.log(x));
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Ažuriranje radnika' : 'Novi radnik';

      if (!id){
        this.loadTempData();
        return;
      }
       

      this.radService.getRadnik(id)
        .subscribe(
          (pos) =>{
            if(pos.success){
              this.saveTemp = false;
              this.radnikN = pos.data[0];
            }else{
              this.flashMessage.show(pos.message, {
                cssClass: 'alert-danger',
                timeout: 9000});
              this.router.navigate(['NotFound']);
            }
          } ,
          error => {
            this.flashMessage.show(error, {
              cssClass: 'alert-danger',
              timeout: 9000});
            // if (error == 404 || error.status == 400 ) {
                this.router.navigate(['NotFound']);
            // }
          });
    });

   
  }
  
  loadTempData(){
    const radnik = JSON.parse(localStorage.getItem('data_radnik'));
    if(radnik){
      this.radnikN =radnik;
    }
    
  }

  setTempData(){
    const  radValue = JSON.stringify(this.formRAD.value);
    if(radValue){
      if(this.saveTemp){
      localStorage.setItem('data_radnik',radValue);
      }else{
        this.clearTempData();
      }
    }
    
   }
 
 clearTempData(){
     localStorage.removeItem('data_radnik');
  }

  backClicked(event: any) {
    this.setTempData();
    this._location.back();
    //event.stopPropagation();
    
  }

save() {
    var result,
        radValue = this.formRAD.value;
      
    if (radValue._id){
       this.radService.updateRadnik(radValue).subscribe(
        (pos) =>{
          if(pos.success){
            this.clearTempData();
            this.saveTemp=false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['radnik'])
            
          }else{
            this.router.navigate(['NotFound']);
          }
        } ,
        error => {
          this.flashMessage.show(error, {
            cssClass: 'alert-danger',
            timeout: 9000});
         
        },
        
      );

    } else {

      this.radService.addRadnik(radValue)
      .subscribe(
        (pos) =>{
          if(pos.success){
            this.clearTempData();
            this.saveTemp=false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['radnik'])
          }else{
            this.router.navigate(['NotFound']);
          }
        } ,
        error => {
          this.flashMessage.show(error, {
            cssClass: 'alert-danger',
            timeout: 9000});
                  
        },
        
      );
    }

   
  }

  revert() { this.ngOnChanges(); }
  
  ngOnChanges() {
    this.formRAD.reset({
      SifraRad: "",
      Ime:"",
      Prezime:"",
      Jmbg:"",
      Aktivan:false,
      Opis:""
    });
}

ngOnDestroy() {
  this.setTempData();
}



}


  //   plloc.onPopState(() => {
          
      //             console.log('pressed back!');
          
      // });