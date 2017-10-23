
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

import { ButtonModule,InputTextModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';

 
import { ZanimanjaComponent } from './zanimanja.component';
import { ZanimanjaFormComponent } from './zanimanja-form/zanimanja-form.component';
import { ZanimanjaRoutingModule } from './zanimanja-routing.module';
import { ZanimanjaService } from './zanimanja.service';
 

 
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
    ZanimanjaRoutingModule
  ],
  declarations: [
    ZanimanjaComponent,
    ZanimanjaFormComponent
  ],
  providers: [ ZanimanjaService,ConfirmationService ]
})
export class ZanimanjaModule {}