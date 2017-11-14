import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { RadnikComponent } from './radnik.component';
import { RadnikFormComponent } from './radnik-form/radnik-form.component';
import { RadnikService} from './radnik.service';
import { RadnikRoutingModule } from './radnik-routing.module';

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
    RadnikRoutingModule
  ],
  declarations: [
    RadnikComponent,
    RadnikFormComponent
  ],
  providers: [ RadnikService, ConfirmationService ]
})
export class RadnikModule {
}
