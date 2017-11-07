import { Component, OnInit,OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray,FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {formsTransition} from '../../../animation/forms.animations'
import { PartnerService } from '../partner.service';
import { PAdresaModel,PAZiroModel,PATelefonModel,PAKontaktModel,ParnerModel } from '../partner-model';
import {DrzaveService} from '../../drzave/drzave.service';
import {Drzave} from '../../drzave/drzave.model'
import {FlashMessagesService} from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom}  from './../../../shared/models/ErrorRes';


@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css'],
  animations: [formsTransition()]
})
export class PartnerFormComponent implements OnInit,OnDestroy {
  formPartn: FormGroup;
  title: string;
  partnN : ParnerModel = new ParnerModel();
  partAdresa:PAdresaModel;
  saveTemp:boolean = true;
  drzave: Array<Drzave>;

  constructor(private partnService:PartnerService, private router:Router,private route: ActivatedRoute, 
    private _fb: FormBuilder ,private _location: Location,private flashMessage:FlashMessagesService,
    private serValidate:ServiceValidateShared,private drzaveService:DrzaveService) { 

      this.formPartn = this._fb.group({
        _id:[],
        KyeSearch: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(12)]],
        Naziv:['',[Validators.required,Validators.minLength(2),Validators.maxLength(150)]],
        UgovProc:[0,[Validators.required,serValidate.minValue(0),serValidate.maxValue(100)]],
        Drzava:['',[Validators.required]],
        Aktivan:[true],
        Adresa :this._fb.group({
          AdUlica:['', [Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
          AdBroj: [''],
          AdMesto:[''],
          AdPttReon:[''],
          AdPttPak: [''],
          AdDrzava: ['']
        }),
        Email:[''],
        Pib:[''],
        MatBroj:[''],
        SifDelat:[''],
        PdvBroj:[''],
        Ziro:this._fb.array([
            ]),
        Telefon:this._fb.array([
            ]),
        Kontakt:this._fb.array([
        	  ]),
        Opis: ['']
      });


    }

  ngOnInit() {

    this.drzaveService.getDrzave().subscribe(profile => {
        if (profile.success === true) { 
            this.drzave = profile.data;
          }else{
          this.flashMessage.show(profile.message, {
                cssClass: 'alert-danger',
                timeout: 9000});
            this.drzave=[];
          }
      },
      (error:ResponeCustom) => {
        console.log(error);
          this.flashMessage.show(error.message, {
              cssClass: 'alert-danger',
              timeout: 9000});
          this.drzave=[];
          return false;
      }
    );

  this.route.params.subscribe(params => {
      let id = params['id'];
      this.title = id ? 'Ažuriranje kupca' : 'Novi kupac';
      if (!id){
         //this.initAdresa("","","","","","");
         this.loadTempData();
         return;
      }

      this.partnService.getPartner(id)
        .subscribe(
          (pos) =>{
            if(pos.success){
              this.saveTemp = false;
               this.partnN = pos.data[0];
               this.partAdresa = pos.data[0].Adresa;
               this.initAdresa(this.partAdresa);
               //console.log(JSON.stringify(this.vlasnN ));
              // this.initDataZiro();
              // this.initAdresa();

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

  get KyeSearch() { return this.formPartn.get('KyeSearch'); }
  get Naziv() { return this.formPartn.get('Naziv'); }
  
  get Adresa():FormGroup { return this.formPartn.get('Adresa') as FormGroup; }

  get Ziro(): FormArray { return this.formPartn.get('Ziro') as FormArray; }
  get Kontakt(): FormArray { return this.formPartn.get('Kontakt') as FormArray; }
  
// initAdresa(tAdUlica:string,tAdBroj:string,tAdMesto:string,tAdPttReon:string,tAdPttPak:string,tAdDrzava:string) {
//   //Adresa.
//   this.Adresa.setValue({
//     AdUlica:tAdUlica,
//     AdBroj:tAdBroj,
//     AdMesto:tAdMesto,
//     AdPttReon:tAdPttReon,
//     AdPttPak:tAdPttPak,
//     AdDrzava:tAdDrzava
//   });

// }
  
initAdresa(tAdresa:PAdresaModel) {
  //Adresa.
  //console.log("Dobio sam adresu " + JSON.stringify(tAdresa));
  this.Adresa.setValue({
    AdUlica:tAdresa.AdUlica,
    AdBroj:tAdresa.AdBroj,
    AdMesto:tAdresa.AdMesto,
    AdPttReon:tAdresa.AdPttReon,
    AdPttPak:tAdresa.AdPttPak,
    AdDrzava:tAdresa.AdDrzava
  });

}


  
  save() {
    var FPValue = this.formPartn.value;
      
    if (FPValue._id){
       this.partnService.updatePartner(FPValue).subscribe(
        (pos) =>{
          if(pos.success){
            this.clearTempData();
            this.saveTemp=false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['partner'])
          }else{
            this.router.navigate(['NotFound']);
          }
        } ,
        (error:ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        
         // console.log(" forma UPDATE  " + error);
         
        },
        
      );

    } else {

      this.partnService.addPartner(FPValue)
      .subscribe(
        (pos) =>{
          if(pos.success){
            this.clearTempData();
            this.saveTemp=false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['partner'])
          }else{
            this.router.navigate(['NotFound']);
          }
        } ,
        (error:ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
          //console.log(" forma INSERT "  + error.toString()  + " ima li jos nesto" + error);
          
        },
        
      );
    }
  }



  loadTempData(){
    const wdata = JSON.parse(localStorage.getItem('data_kupac'));
    if(wdata){
      this.partnN =wdata;
    }
    
  }

setTempData(){
    const  fsValue = JSON.stringify(this.formPartn.value);
    if(fsValue){
      if(this.saveTemp){
        localStorage.setItem('data_kupac',fsValue);
      }else{
        this.clearTempData();
      }
    }
    
}
 
clearTempData(){
     localStorage.removeItem('data_kupac');
}

backClicked(event: any) {
    this.setTempData();
    this._location.back();
}

revert() { this.ngOnChanges(); }
  
ngOnChanges() {
    this.formPartn.reset({
      KyeSearch:"",
      Naziv:'',
      UgovProc:0,
      Drzava:'',
      Aktivan:false,
      Adresa:null,
      Email:'',
      Pib:'',
      MatBroj:'',
      SifDelat:'',
      PdvBroj:'',
      Ziro:null,
      Telefon:null,
      Kontakt:null,
      Opis:""
    });
}

ngOnDestroy() {
  this.setTempData();
}


}
