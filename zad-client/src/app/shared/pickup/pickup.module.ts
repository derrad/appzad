import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { PickDrzavaComponent } from './pick-drzava/pick-drzava.component';
import { PickOpstinaComponent } from './pick-opstina/pick-opstina.component';
import { PickKupacComponent } from './pick-kupac/pick-kupac.component';
import { PickZadrugarComponent } from './pick-zadrugar/pick-zadrugar.component';
import { PickMestoComponent } from './pick-mesto/pick-mesto.component';
import { PickZanimComponent } from './pick-zanim/pick-zanim.component';

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
    InputTextModule
  ],
  declarations: [PickDrzavaComponent, PickOpstinaComponent, PickKupacComponent, PickZadrugarComponent, PickMestoComponent, 
                 PickZanimComponent],
  exports: [PickDrzavaComponent, PickOpstinaComponent, PickKupacComponent, PickZadrugarComponent, PickMestoComponent,
            PickZanimComponent]
})
export class PickupModule { }
