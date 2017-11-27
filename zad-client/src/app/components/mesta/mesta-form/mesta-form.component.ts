import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Mesta } from './../mesta.model';
import { MestaService } from './../mesta.service';
import { Opstine} from '../../opstine/opstine.model';
import { Location} from '@angular/common';
import { formsTransition} from '../../../animation/forms.animations';
import { OpstineService} from './../../opstine/opstine.service';
import { ResponeCustom } from '../../../shared/models/ErrorRes';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-mesta-form',
  templateUrl: './mesta-form.component.html',
  styleUrls: ['./mesta-form.component.css'],
  animations: [formsTransition()]

})
export class MestaFormComponent implements OnInit, OnDestroy  {
  formMEST: FormGroup;
  title: string;
  mesto: Mesta = new Mesta();
  opstine: Array<Opstine>;
  saveTemp = true;

  constructor(private opstService: OpstineService,
    private mestaService: MestaService, private router: Router, private route: ActivatedRoute,
    formBuilder: FormBuilder, private _location: Location, private flashMessage: FlashMessagesService) {

      this.formMEST = formBuilder.group({
        _id: [],
        Opstina: ['', [Validators.required]],
        Naziv: ['', [
          Validators.required
        ]],
        Ptt: [],
        Opis: []
      });
    }

  get Naziv() { return this.formMEST.get('Naziv'); }
  get Opstina() { return this.formMEST.get('Opstina'); }

  ngOnInit() {
      this.opstService.getOpstine().subscribe(profile => {
        if (profile.success === true) {
            this.opstine = profile.data;
        }
        },
        (error: ResponeCustom)  => {
        this.opstine = [];
        return false;
        }
      );

      this.route.params.subscribe(params => {
        const id = params['id'];
        this.title = id ? 'Ažuriranje mesta' : 'Novo mesto';
        if (!id) {
          this.loadTempData();
          return;
        }
          this.mestaService.getMesto(id)
            .subscribe(
            (result) => {
              if (result.success ) {
                this.saveTemp = false;
                this.mesto = result.data[0];
              }else {
                this.flashMessage.show(result.message, {
                  cssClass: 'alert-danger',
                  timeout: 9000});
                 this.router.navigate(['NotFound']);
              }
            },
            (error: ResponeCustom) => {
                this.flashMessage.show(error.message, {
                  cssClass: 'alert-danger',
                  timeout: 9000});
                  this.router.navigate(['NotFound']);
              });
        });
  }

  loadTempData() {
    const mest = JSON.parse(localStorage.getItem('data_mesto'));
    if (mest) {
      this.mesto = mest;
    }
  }

  setTempData() {
    const  mestValue = JSON.stringify(this.formMEST.value);
    if (mestValue) {
      if (this.saveTemp) {
       localStorage.setItem('data_mesto', mestValue);
      }else {
        this.clearTempData();
      }
    }
  }

 clearTempData() {
     localStorage.removeItem('data_mesto');
  }

  backClicked(event: any) {
    this.setTempData();
    this._location.back();
  }



  save() {
    const  mestaValue = this.formMEST.value;
    if (mestaValue._id) {
      this.mestaService.updateMesto(mestaValue).subscribe(
       (pos) => {
         if (pos.success) {
           this.clearTempData();
           this.saveTemp = false;
           this.flashMessage.show(pos.message, {
             cssClass: 'alert-success',
             timeout: 5000});
             this.router.navigate(['mesta']);
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
      this.mestaService.addMesto(mestaValue)
      .subscribe(
       (pos) => {
         if (pos.success) {
           this.clearTempData();
           this.saveTemp = false;
           this.flashMessage.show(pos.message, {
             cssClass: 'alert-success',
             timeout: 5000});
             this.router.navigate(['mesta']);
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
    this.formMEST.reset({
      Naziv: '',
      Ptt: '',
      Opis: ''
    });
  }

  ngOnDestroy() {
    this.setTempData();
  }


}
