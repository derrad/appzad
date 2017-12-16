
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { PosaoComponent } from './posao.component';
import { PosaoFormComponent } from './posao-form/posao-form.component';
import { PosaoService } from './posao.service';
import { PosaoRoutingModule } from './posao-routing.module';

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
    PosaoRoutingModule
  ],
  declarations: [
    PosaoComponent,
    PosaoFormComponent
  ],
  providers: [PosaoService, ConfirmationService]
})
export class PosaoModule { }
