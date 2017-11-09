import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { BankeComponent } from './banke.component';
import { BankeFormComponent } from './banke-form/banke-form.component';
import { BankeService } from './banke.service';
import { BankeRoutingModule } from './banke-routing.module';

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
    BankeRoutingModule
  ],
  declarations: [
    BankeComponent,
    BankeFormComponent
  ],
  providers: [ BankeService, ConfirmationService ]
})


export class BankeModule { }


