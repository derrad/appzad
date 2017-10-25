
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

import { ButtonModule,InputTextModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';

import { FondSatiComponent } from './fond-sati.component';
import { FondSatiFormComponent } from './fond-sati-form/fond-sati-form.component';
import { FondSatiService } from './fond-sati.service';
import { FondSatiRoutingModule } from './fondsati-routing.module';

 

 
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
    FondSatiRoutingModule
  ],
  declarations: [
    FondSatiComponent,
    FondSatiFormComponent
  ],
  providers: [ FondSatiService,ConfirmationService ]
})
export class FondSatiModule { }
