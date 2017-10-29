import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule,InputTextModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';

import { KonstantaComponent } from './konstanta.component';
import { KonstantaFormComponent } from './konstanta-form/konstanta-form.component';
import { KonstantaService } from './konstanta.service';
import { KonstantaRoutingModule } from './konstanta-routing.module';

 

 
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
    KonstantaRoutingModule
  ],
  declarations: [
    KonstantaComponent,
    KonstantaFormComponent
  ],
  providers: [ KonstantaService,ConfirmationService ]
})


export class KonstantaModule { }
