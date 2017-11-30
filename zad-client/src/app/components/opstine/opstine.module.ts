import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { OpstineComponent } from './opstine.component';
import { OpstineFormComponent } from './opstine-form/opstine-form.component';
import {OpstineService} from './opstine.service';
import { OpstineRoutingModule } from './opstine-routing.module';
import { ApppipeModule } from './../../shared/PipeApp/apppipe/apppipe.module';
 import { PickupModule } from './../../shared/pickup/pickup.module';
 // import { PickDrzavaComponent } from './../../shared/pickup/pick-drzava/pick-drzava.component';
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
    PickupModule,
    OpstineRoutingModule
  ],
  declarations: [
    OpstineComponent,
    OpstineFormComponent
    // PickDrzavaComponent
  ],
  providers: [ OpstineService, ConfirmationService ]
})
export class OpstineModule {}
