
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { ParametarService} from './parametar.service';
import { ParametarComponent } from './parametar.component';
import { ParametarFormComponent } from './parametar-form/parametar-form.component';
import { ParametarRoutingModule} from './parametar-routing.module';

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
    ParametarRoutingModule
  ],
  declarations: [
    ParametarComponent,
    ParametarFormComponent
  ],
  providers: [ ParametarService, ConfirmationService ]
})
export class ParametarModule { }
