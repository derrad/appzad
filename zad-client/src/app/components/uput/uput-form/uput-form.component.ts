import { Component, OnInit, Directive, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { formsTransition} from '../../../animation/forms.animations';
import { UputService } from '../uput.service';
import { UputModel, UputStavModel, UputRacVlasnikModel } from '../uput.model';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom} from './../../../shared/models/ErrorRes';
import { ZadrugarModel} from './../../zadrugar/zadrugar-model';
import { ZadrugarService } from './../../zadrugar/zadrugar.service';
import { PartnerService } from './../../partner/partner.service';
import { PartnerModel } from './../../partner/partner-model';
import { VlasnikService } from './../../vlasnik/vlasnik.service';
import { RacunVlasnikModel } from './../../vlasnik/vlasnik-model';


@Component({
  selector: 'app-uput-form',
  templateUrl: './uput-form.component.html',
  styleUrls: ['./uput-form.component.css']
})
export class UputFormComponent implements OnInit, OnDestroy {
  formUput: FormGroup;
  title: string;
  uputN: UputModel = new UputModel();
  racvlasnikL: Array<RacunVlasnikModel>;
  kupacL: Array<PartnerModel>;
  zadrL: Array<ZadrugarModel>;
  saveTemp = true;

  constructor(private partnService: PartnerService, private router: Router, private route: ActivatedRoute, private uputService: UputService,
    private _fb: FormBuilder , private _location: Location, private flashMessage: FlashMessagesService,
    private serValidate: ServiceValidateShared, private vlasnService: VlasnikService, private zadrService: ZadrugarService) {

      this.formUput = this._fb.group({
        _id: [],
        Broj: ['', [Validators.required]],
        Godina: ['', [ Validators.required]],
        Datum: ['', [ Validators.required]],
        RacVlasnika: ['', [ Validators.required]],
        PosloviID: ['', [ Validators.required]],
        PartneriID: ['', [ Validators.required]],
        Stavke: this._fb.array([
            ])
      });
    }

  ngOnInit() {

    this.partnService.getActivPartner().subscribe(profile => {
      if (profile.success === true) {
          this.kupacL = profile.data;
        }else {
        this.flashMessage.show(profile.message, {
              cssClass: 'alert-danger',
              timeout: 9000});
          this.kupacL = [];
        }
    },
    (error: ResponeCustom) => {
      console.log(error);
        this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        this.kupacL = [];
        return false;
    }
  );

  this.vlasnService.getVlasnRacun().subscribe(profile => {
    if (profile.success === true) {
        this.racvlasnikL = profile.data;
      }else {
      this.flashMessage.show(profile.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        this.racvlasnikL = [];
      }
  },
  (error: ResponeCustom) => {
    console.log(error);
      this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
      this.racvlasnikL = [];
      return false;
  }
  );

  this.zadrService.getActivZadrugar().subscribe(profile => {
    if (profile.success === true) {
        this.zadrL = profile.data;
      }else {
      this.flashMessage.show(profile.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        this.zadrL = [];
      }
  },
  (error: ResponeCustom) => {
    console.log(error);
      this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
      this.zadrL = [];
      return false;
  }
  );

  }

  get RacVlasnika() { return this.formUput.get('RacVlasnika'); }
  get PosloviID() { return this.formUput.get('PosloviID'); }
  get Datum() { return this.formUput.get('Datum'); }
  get PartneriID() { return this.formUput.get('PartneriID'); }
  get Stavke(): FormArray { return this.formUput.get('Stavke') as FormArray; }




  loadTempData() {
    const wdata = JSON.parse(localStorage.getItem('data_uput'));
    if (wdata) {
      this.uputN = wdata;
    }
  }

setTempData() {
    const  fsValue = JSON.stringify(this.formUput.value);
    if (fsValue) {
      if (this.saveTemp) {
        localStorage.setItem('data_uput', fsValue);
      }else {
        this.clearTempData();
      }
    }

}

clearTempData() {
     localStorage.removeItem('data_uput');
}

backClicked(event: any) {
    this.setTempData();
    this._location.back();
}

revert() { this.clearFormData(); }

clearFormData() {
    this.formUput.reset({
      Broj: '',
      Godina: '',
      Datum: '',
      RacVlasnika: null,
      PosloviID: null,
      PartneriID: null,
      Stavke: null
    });
}

ngOnDestroy() {
  this.setTempData();
}




}
