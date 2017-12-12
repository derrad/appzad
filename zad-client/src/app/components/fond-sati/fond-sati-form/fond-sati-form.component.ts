// import { Message } from 'primeng/components/common/api';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { formsTransition } from '../../../animation/forms.animations';
import { FondSatiService } from '../fond-sati.service';
import { FondSati } from '../fondsati.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom } from './../../../shared/models/ErrorRes';

@Component({
  selector: 'app-fond-sati-form',
  templateUrl: './fond-sati-form.component.html',
  styleUrls: ['./fond-sati-form.component.css'],
  animations: [formsTransition()]
})
export class FondSatiFormComponent implements OnInit, OnDestroy {
  formFSAT: FormGroup;
  title: string;
  fnsatN: FondSati = new FondSati();
  saveTemp = true;

  constructor(private fnsatService: FondSatiService, private router: Router, private route: ActivatedRoute,
    formBuilder: FormBuilder, private _location: Location, private flashMessage: FlashMessagesService,
    private serValidate: ServiceValidateShared) {

    this.formFSAT = formBuilder.group({
      _id: [],
      Mesec: ['', [Validators.required, serValidate.maxValue(12), serValidate.minValue(1)]],
      Godina: ['', [
        Validators.required, serValidate.maxValue(2040), serValidate.minValue(2000)
      ]],
      Sati: ['', [
        Validators.required, serValidate.maxValue(248), serValidate.minValue(0)
      ]],
      MinOsnov: ['', [
        Validators.required, serValidate.minValue(0)
      ]],
      MaxOsnov: ['', [
        Validators.required, serValidate.minValue(0)
      ]],
      Opis: []
    });
  }


  get Mesec() { return this.formFSAT.get('Mesec'); }
  get Godina() { return this.formFSAT.get('Godina'); }
  get Sati() { return this.formFSAT.get('Sati'); }
  get MinOsnov() { return this.formFSAT.get('MinOsnov'); }
  get MaxOsnov() { return this.formFSAT.get('MaxOsnov'); }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.title = id ? 'Ažuriranje fonda sati' : 'Novi fond sati';

      if (!id) {
        this.loadTempData();
        return;
      }

      this.fnsatService.getFondSati(id)
        .subscribe(
        (pos) => {
          if (pos.success) {
            this.saveTemp = false;
            this.fnsatN = pos.data[0];
          } else {
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-danger',
              timeout: 9000
            });
            // this.router.navigate(['NotFound']);

          }
        },
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000
          });
          // this.router.navigate(['NotFound']);
          if (error.status === 401) {
            this.router.navigate(['login']);
          }
        });
    });
  }


  save() {
    const FSValue = this.formFSAT.value;
    if (FSValue._id) {
      this.fnsatService.updateFondSati(FSValue).subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000
            });
            this.router.navigate(['fondsati']);
          } else {
            // this.router.navigate(['NotFound']);
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000
            });
          }
        },
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000
          });
          if (error.status === 404) {
            this.router.navigate(['NotFound']);
          }
          if (error.status === 401) {
            this.router.navigate(['login']);
          }
        },
      );

    } else {

      this.fnsatService.addFondSati(FSValue)
        .subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000
            });
            this.router.navigate(['fondsati']);
          } else {
            // this.router.navigate(['NotFound']);
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000
            });
          }
        },
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000
          });
          if (error.status === 404) {
            this.router.navigate(['NotFound']);
          }
          if (error.status === 401) {
            this.router.navigate(['login']);
          }
        },
      );
    }
  }

  loadTempData() {
    const wdata = JSON.parse(localStorage.getItem('data_fnsati'));
    if (wdata) {
      this.fnsatN = wdata;
    }
  }

  setTempData() {
    const fsValue = JSON.stringify(this.formFSAT.value);
    if (fsValue) {
      if (this.saveTemp) {
        localStorage.setItem('data_fnsati', fsValue);
      } else {
        this.clearTempData();
      }
    }
  }

  clearTempData() {
    localStorage.removeItem('data_fnsati');
  }

  backClicked(event: any) {
    this.setTempData();
    this._location.back();
  }

  revert() {
   // this.clearFormData();
    this.formFSAT.reset();
  }

  clearFormData() {
    this.formFSAT.reset({
      Mesec: '',
      Godina: '',
      Sati: '',
      MinOsnov: 0,
      MaxOsnov: 0,
      Opis: ''
    });
  }

  ngOnDestroy() {
    this.setTempData();
  }

}
