import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DrzaveComponent } from './drzave.component';
import { DrzaveFormComponent } from './drzave-form/drzave-form.component';
import {DrzaveService} from './drzave.service';
import { DrzaveRoutingModule } from './drzave-routing.module';
import { ApppipeModule } from './../../shared/PipeApp/apppipe/apppipe.module';
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
    ApppipeModule,
    DrzaveRoutingModule
  ],
  declarations: [
    DrzaveComponent,
    DrzaveFormComponent
  ],
  providers: [ DrzaveService, ConfirmationService ]
})
export class DrzaveModule {}
