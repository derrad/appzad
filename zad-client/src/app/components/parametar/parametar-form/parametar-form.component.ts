import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Parametar } from '../parametar.model';
import { ParametarService } from '../parametar.service';
import { Location } from '@angular/common';
import { formsTransition } from '../../../animation/forms.animations';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom } from '../../../shared/models/ErrorRes';

@Component({
  selector: 'app-parametar-form',
  templateUrl: './parametar-form.component.html',
  styleUrls: ['./parametar-form.component.css'],
  animations: [formsTransition()]
})
export class ParametarFormComponent implements OnInit, OnDestroy {

  frParam: FormGroup;
  title: string;
  parametar: Parametar = new Parametar();
  saveTemp = true;

  constructor(private router: Router, private route: ActivatedRoute,
    formBuilder: FormBuilder, private paramService: ParametarService,
    private _location: Location, private flashMessage: FlashMessagesService,
    private serValidate: ServiceValidateShared) {

    this.frParam = formBuilder.group({
      _id: [],
      Naziv: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        serValidate.validateRegExpSifru
      ]],
      Koristi: [],
      VredString: [],
      VredNumeric: [],
      Opis: []
    });
  }

  get Naziv() { return this.frParam.get('Naziv'); }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.title = id ? 'Ažuriranje Parametra' : 'Novi Parametar';

      if (!id) {
        this.loadTempData();
        return;
      }

      this.paramService.getParametar(id)
        .subscribe(
        (param) => {
          if (param.success) {
            this.saveTemp = false;
            this.parametar = param.data[0];
          } else {
            this.flashMessage.show(param.message, {
              cssClass: 'alert-danger',
              timeout: 9000
            });
            this.router.navigate(['NotFound']);
          }
        },
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000
          });
          this.router.navigate(['NotFound']);
        });
    });

  }

  loadTempData() {
    const par = JSON.parse(localStorage.getItem('data_param'));
    if (par) {
      this.parametar = par;
    }
  }

  setTempData() {
    const parValue = JSON.stringify(this.frParam.value);
    if (parValue) {
      if (this.saveTemp) {
        localStorage.setItem('data_param', parValue);
      } else {
        this.clearTempData();
      }
    }
  }

  clearTempData() {
    localStorage.removeItem('data_param');
  }

  backClicked(event: any) {
    this.setTempData();
    this._location.back();
  }

  save() {
    const paramValue = this.frParam.value;
    if (paramValue._id) {
      this.paramService.updateParametar(paramValue).subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000
            });
            this.router.navigate(['parametar']);
          } else {
            this.router.navigate(['NotFound']);
          }
        },
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000
          });
        },
      );
    } else {
      this.paramService.addParametar(paramValue)
        .subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000
            });
            this.router.navigate(['parametar']);
          } else {
            this.router.navigate(['NotFound']);
          }
        },
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000
          });
        },
      );
    }
  }

  revert() {
    // this.clearFormData();
    this.frParam.reset();
  }

  clearFormData() {
    this.frParam.reset({
      Naziv: '',
      Koristi: '',
      VredString: '',
      VredNumeric: 0,
      Opis: ''
    });
  }

  ngOnDestroy() {
    this.setTempData();
  }
}
