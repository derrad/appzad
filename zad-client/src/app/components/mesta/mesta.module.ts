import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

import { ButtonModule,InputTextModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';


import { MestaService } from './mesta.service';
import { MestaComponent } from './mesta.component';
import { MestaFormComponent } from './mesta-form/mesta-form.component';
import { MestaRoutingModule } from './mesta-routing.module';


 
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
    MestaRoutingModule
  ],
  declarations: [
    MestaComponent,
    MestaFormComponent
  ],
  providers: [ MestaService,ConfirmationService ]
})
export class MestaModule {}