import { Component, OnInit , OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { formsTransition } from '../../../animation/forms.animations';
import { Posao } from './../posao.model';
import { PosaoService } from './../posao.service';
import { StepenSS } from './../../../shared/EnumApp/StepenSS.enum';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ResponeCustom } from './../../../shared/models/ErrorRes';

@Component({
  selector: 'app-posao-form',
  templateUrl: './posao-form.component.html',
  styleUrls: ['./posao-form.component.css'],
  animations: [formsTransition()]
})
export class PosaoFormComponent implements OnInit , OnDestroy {

  formPOSAO: FormGroup;
  title: string;
  posaoN: Posao = new Posao();
  strSprema = StepenSS;
  saveTemp = true;


  constructor(private posService: PosaoService, private router: Router, private route: ActivatedRoute,
    formBuilder: FormBuilder, private _location: Location, private flashMessage: FlashMessagesService) {

      this.formPOSAO = formBuilder.group({
        _id: [],
        StepenSS: ['', [Validators.required]],
        Naziv: ['', [
          Validators.required
        ]],
        Skola: [],
        Sifra: [],
        Sifra1: [],
        Opis: []
      });
    }

  get Naziv() { return this.formPOSAO.get('Naziv'); }
  get StepenSS() { return this.formPOSAO.get('StepenSS'); }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.title = id ? 'Ažuriranje posla' : 'Novi posao';
      if (!id) {
        this.loadTempData();
        return;
      }

      this.posService.getPosao(id)
        .subscribe(
          (pos) => {
            if (pos.success) {
              this.saveTemp = false;
              this.posaoN = pos.data[0];
            }else {
              this.flashMessage.show(pos.message, {
                cssClass: 'alert-danger',
                timeout: 9000});
              this.router.navigate(['NotFound']);
            }
          } ,
          (error: ResponeCustom) => {
            this.flashMessage.show(error.message, {
              cssClass: 'alert-danger',
              timeout: 9000});
          //  if (error.status == 404) {
              this.router.navigate(['NotFound']);
         //   }
          });
    });
  }


  loadTempData() {
    const posao = JSON.parse(localStorage.getItem('data_posao'));
    if (posao) {
      this.posaoN = posao;
    }
  }

  setTempData() {
    const  posValue = JSON.stringify(this.formPOSAO.value);
    if (posValue) {
      if (this.saveTemp) {
        localStorage.setItem('data_posao', posValue);
      }else {
        this.clearTempData();
      }
    }
   }

 clearTempData() {
     localStorage.removeItem('data_posao');
  }

  backClicked(event: any) {
    this.setTempData();
    this._location.back();
  }

  save() {
    const posValue = this.formPOSAO.value;
        if (posValue._id) {
          this.posService.updatePosao(posValue).subscribe(
           (pos) => {
             if (pos.success) {
               this.clearTempData();
               this.saveTemp = false;
               this.flashMessage.show(pos.message, {
                 cssClass: 'alert-success',
                 timeout: 5000});
                 this.router.navigate(['posao']);
             }else {
               this.router.navigate(['NotFound']);
             }
           } ,
           (error: ResponeCustom) => {
             this.flashMessage.show(error.message, {
               cssClass: 'alert-danger',
               timeout: 9000});
           },
         );
       } else {
        this.posService.addPosao(posValue)
         .subscribe(
           (pos) => {
             if (pos.success) {
               this.clearTempData();
               this.saveTemp = false;
               this.flashMessage.show(pos.message, {
                 cssClass: 'alert-success',
                 timeout: 5000});
                 this.router.navigate(['posao']);
             }else {
               this.router.navigate(['NotFound']);
             }
           } ,
           (error: ResponeCustom) => {
             this.flashMessage.show(error.message, {
               cssClass: 'alert-danger',
               timeout: 9000});
           },
         );
       }
  }

  revert() { this.clearFormData(); }

  clearFormData() {
    this.formPOSAO.reset({
      Naziv: '',
      Skola: '',
      Sifra: '',
      Sifra1: '',
      Opis: ''
    });
  }

ngOnDestroy() {
  this.setTempData();
}



}

// https://stackoverflow.com/questions/35750059/select-based-on-enum-in-angular2
// <select>
// <option *ngFor="let item of strSprema | keys" [value]="item.key">{{item.value}}</option>
// </select>
