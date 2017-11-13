
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { ZadrugarComponent } from './zadrugar.component';
import { ZadrugarFormComponent } from './zadrugar-form/zadrugar-form.component';
import { ZadrugarService } from './zadrugar.service';
import { ZadrugarRoutingModule } from './zadrugar-routing.module';

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
    ZadrugarRoutingModule
  ],
  declarations: [
    ZadrugarComponent,
    ZadrugarFormComponent
  ],
  providers: [ ZadrugarService, ConfirmationService ]
})
export class ZadrugarModule { }
