import { Component, OnInit, Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray,FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {formsTransition} from '../../../animation/forms.animations'
import { PartnerService } from '../partner.service';
import { PAdresaModel,PAZiroModel,PATelefonModel,PAKontaktModel,ParnerModel } from '../partner-model';

import {FlashMessagesService} from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom}  from './../../../shared/models/ErrorRes';


@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css'],
  animations: [formsTransition()]
})
export class PartnerFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
