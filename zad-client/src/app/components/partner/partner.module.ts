import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

import { ButtonModule,InputTextModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';

import { PartnerComponent } from './partner.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';
import { PadresaComponent } from './partner-form/padresa.component';
import { ZiroPartnerComponent } from './partner-form/ziropartner.component';
import { TelefonPartnerComponent } from './partner-form/telefonpartner.component';


import {PartnerService} from './partner.service';
import { PartnerRoutingModule } from './partner-routing.module';

 

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    DialogModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    InputTextModule,
    PartnerRoutingModule
  ],
  declarations: [
    PartnerComponent,
    PartnerFormComponent,
    PadresaComponent,
    ZiroPartnerComponent,
    TelefonPartnerComponent
  ],
  providers: [ PartnerService,ConfirmationService ]
})
export class PartnerModule { }
