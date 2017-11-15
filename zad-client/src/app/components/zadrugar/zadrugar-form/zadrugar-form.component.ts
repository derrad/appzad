import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {formsTransition} from '../../../animation/forms.animations';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom} from './../../../shared/models/ErrorRes';
import { ZadrugarModel, ZDAdresaModel } from './../zadrugar-model';

@Component({
  selector: 'app-zadrugar-form',
  templateUrl: './zadrugar-form.component.html',
  styleUrls: ['./zadrugar-form.component.css'],
  animations: [formsTransition()]
})
export class ZadrugarFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
