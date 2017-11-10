import { Component, OnInit ,  OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Drzave} from '../drzave.model';
import { DrzaveService } from '../drzave.service';
import { Location} from '@angular/common';
import { formsTransition } from '../../../animation/forms.animations';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom} from './../../../shared/models/ErrorRes';
import { FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-drzave-form',
  templateUrl: './drzave-form.component.html',
  styleUrls: ['./drzave-form.component.css'],
  animations: [ formsTransition()]
})
export class DrzaveFormComponent implements OnInit, OnDestroy {

  formDR: FormGroup;
  title: string;
  drzavaN: Drzave = new Drzave();
  titleAlertNaziv = 'This field is required !!!';
  titleAlertKod = 'KOD-ima jos, This field is required !!!';
  private saveTemp = true;


  constructor(private drzaveService: DrzaveService, private router: Router, private route: ActivatedRoute,
    formBuilder: FormBuilder, private _location: Location, private serValidate: ServiceValidateShared,
    private flashMessage: FlashMessagesService) {
      this.formDR = formBuilder.group({
        _id: [],
        KodDrzave: ['', [Validators.required, Validators.minLength(2),
                        Validators.maxLength(3), serValidate.validateRegExpSifru]],
        EuClan: [],
        Naziv: ['', [
          Validators.required, Validators.maxLength(100)
        ]],
        Opis: []
      });
  }

  get KodDrzave() { return this.formDR.get('KodDrzave'); }
  get Naziv() { return this.formDR.get('Naziv'); }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.title = id ? 'Ažuriranje Države' : 'NOVA Država';

      if (!id) {
        this.loadTempData();
        return;
      }

        this.drzaveService.getDrzava(id)
        .subscribe(
          (pos) => {
            if (pos.success) {
              this.saveTemp = false;
              this.drzavaN = pos.data[0];
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
            // if (error == 404 || error.status == 400 ) {
                this.router.navigate(['NotFound']);
            // }
          });
      });

  }

  save() {
   const  drzaveValue = this.formDR.value;
   if (drzaveValue._id) {
       this.drzaveService.updateDrzava(drzaveValue).subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['drzave']);
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

      this.drzaveService.addDrzava(drzaveValue)
      .subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['drzave']);
          }else {
            this.router.navigate(['NotFound']);
          }
        } ,
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        }
      );
    }
  }


 loadTempData() {
    const valuetemp = JSON.parse(localStorage.getItem('data_drzava'));
    if (valuetemp) {
      this.drzavaN = valuetemp;
    }
  }

  setTempData() {
    const  fsValue = JSON.stringify(this.formDR.value);
    if (fsValue) {
      if (this.saveTemp) {
        localStorage.setItem('data_drzava', fsValue);
      }else {
        this.clearTempData();
      }
    }
   }

 clearTempData() {
     localStorage.removeItem('data_drzava');
  }

  backClicked(event: any) {
    this.setTempData();
    this._location.back();
  }

  revert() { this.clearFormData(); }

  clearFormData() {
    this.formDR.reset({
      KodDrzave: '',
      Naziv: '',
      EuClan: 0,
      Opis: ''
    });
  }

  ngOnDestroy() {
    this.setTempData();
  }
}
