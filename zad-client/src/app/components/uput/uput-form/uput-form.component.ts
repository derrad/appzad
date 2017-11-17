import { Component, OnInit, Directive } from '@angular/core';
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

@Component({
  selector: 'app-uput-form',
  templateUrl: './uput-form.component.html',
  styleUrls: ['./uput-form.component.css']
})
export class UputFormComponent implements OnInit {
  formUput: FormGroup;
  title: string;
  uputN: UputModel = new UputModel();

  constructor() { }

  ngOnInit() {
  }

}
