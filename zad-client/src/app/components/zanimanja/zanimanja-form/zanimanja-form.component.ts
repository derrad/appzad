import { Message } from 'primeng/components/common/api';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { routerTransition } from '../../../animation/router.animations';
import { ZanimanjaModel } from './../zanimanja.model';
import { ZanimanjaService} from './../zanimanja.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {StepenSS} from './../../../shared/EnumApp/StepenSS.enum';
import { ServiceValidateShared } from './../../../services/service.validate.shared';

@Component({
  selector: 'app-zanimanja-form',
  templateUrl: './zanimanja-form.component.html',
  styleUrls: ['./zanimanja-form.component.css'],
  animations: [routerTransition()]
})
export class ZanimanjaFormComponent implements OnInit , OnDestroy {
  formZAN: FormGroup;
  title: string;
  zanimN: ZanimanjaModel = new ZanimanjaModel();
  strSprema = StepenSS;
  saveTemp = true;

  constructor(private zanService: ZanimanjaService, private router: Router, private route: ActivatedRoute,
              formBuilder: FormBuilder, private _location: Location, private flashMessage: FlashMessagesService,
              private serValidate: ServiceValidateShared) {
      this.formZAN = formBuilder.group({
        _id: [],
        Sifra: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), serValidate.validateRegExpSifru]],
        Naziv: ['', [
          Validators.required, Validators.maxLength(100)
        ]],
        StepenSS: ['', [
          Validators.required
        ]],
        Opis: []
      });
  }

  get Sifra() { return this.formZAN.get('Sifra'); }
  get Naziv() { return this.formZAN.get('Naziv'); }
  get StepenSS() { return this.formZAN.get('StepenSS'); }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.title = id ? 'Ažuriranje zanimanja' : 'Novo zanimanje';

      if (!id) {
        this.loadTempData();
        return;
      }
        this.zanService.getZanimanje(id)
        .subscribe(
          (pos) => {
            if (pos.success) {
              this.saveTemp = false;
              this.zanimN = pos.data[0];
            }else {
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


  backClicked(event: any) {
    this.setTempData();
    this._location.back();
}

  save() {
     const  zanValue = this.formZAN.value;
        if (zanValue._id) {
          this.zanService.updateZanimanje(zanValue).subscribe(
           (pos) => {
             if (pos.success) {
              this.clearTempData();
              this.saveTemp = false;
               // this.flashMessage.grayOut(true);
               this.flashMessage.show(pos.message, {
                 cssClass: 'btn-success',
                 timeout: 5000});
                 this.router.navigate(['zanimanja']);
                // this.flashMessage.grayOut(false);
             }else {
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
        this.zanService.addZanimanje(zanValue)
         .subscribe(
           (pos) => {
             if (pos.success) {
              this.clearTempData();
              this.saveTemp = false;
               this.flashMessage.show(pos.message, {
                 cssClass: 'alert-success',
                 timeout: 5000});
                 this.router.navigate(['zanimanja']);
             }else {
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

  loadTempData() {
    const zanim = JSON.parse(localStorage.getItem('data_zanim'));
    if (zanim) {
      this.zanimN = zanim;
    }
  }

  setTempData() {
    const  radValue = JSON.stringify(this.formZAN.value);
    if (radValue) {
      if (this.saveTemp) {
       localStorage.setItem('data_zanim', radValue);
      }else {
        this.clearTempData();
      }
    }
   }

   clearTempData() {
      localStorage.removeItem('data_zanim');
  }

  ngOnDestroy() {
    // console.log("radnik destroy");
     this.setTempData();
   }

  revert() { this.clearFormData(); }

  clearFormData() {
    this.formZAN.reset({
      Sifra: '',
      Naziv: '',
      StepenSS: '',
      Opis: ''
    });

}

}
