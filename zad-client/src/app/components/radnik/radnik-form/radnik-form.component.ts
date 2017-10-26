import { Message } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {formsTransition} from '../../../animation/forms.animations'
import { Radnik } from '../radnik.model';
import { RadnikService} from '../radnik.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-radnik-form',
  templateUrl: './radnik-form.component.html',
  styleUrls: ['./radnik-form.component.css'],
  animations: [formsTransition()]
})
export class RadnikFormComponent implements OnInit {
  formRAD: FormGroup;
  title: string;
  radnikN : Radnik = new Radnik();
   
  constructor(private radService:RadnikService, private router:Router,private route: ActivatedRoute, 
    formBuilder: FormBuilder ,private _location: Location,private flashMessage:FlashMessagesService) {
      
      this.formRAD = formBuilder.group({
        _id:[],
        SifraRad:['',[Validators.required, Validators.minLength(4),Validators.maxLength(12),this.validateSifru]],
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
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Ažuriranje radnika' : 'Novi radnik';

      if (!id)
        return;

      this.radService.getRadnik(id)
        .subscribe(
          (pos) =>{
            if(pos.success){
              this.radnikN = pos.data[0];
            }else{
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
  

  backClicked(event: any) {
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
        
        //  console.log(" forma UPDATE  " + error);
         
        },
        
      );

    } else {

      this.radService.addRadnik(radValue)
      .subscribe(
        (pos) =>{
          if(pos.success){
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
          //console.log(" forma INSERT "  + error.toString()  + " ima li jos nesto" + error);
          
        },
        
      );
      
      
      
    }

    //result.subscribe(data => this.router.navigate(['radnik']));
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


validateSifru(c: FormControl) {
  let SIFRA_REGEXP = new RegExp('^[a-z0-9_-]+$', 'i');

  return SIFRA_REGEXP.test(c.value) ? null : {
    validateSifru: {
      valid: false
    }
  };
}



}
