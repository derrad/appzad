import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

import { ButtonModule,InputTextModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';

import { PartnerComponent } from './partner.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';
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
    PartnerFormComponent
  ],
  providers: [ PartnerService,ConfirmationService ]
})
export class PartnerModule { }
