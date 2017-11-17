import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { UputFormComponent } from './uput-form/uput-form.component';
import { UputStavkaComponent } from './uput-stavka/uput-stavka.component';
import { UputComponent } from './uput.component';
import { UputService } from './uput.service';
import { UputRoutingModule } from './uput-routing.module';

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
    UputRoutingModule
  ],
  declarations: [UputComponent, UputFormComponent, UputStavkaComponent],
  providers: [ UputService, ConfirmationService ]
})
export class UputModule { }
