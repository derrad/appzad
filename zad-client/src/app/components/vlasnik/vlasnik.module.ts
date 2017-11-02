
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule,InputTextModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';

import { VlasnikComponent } from './vlasnik.component';
import { VlasnikFormComponent } from './vlasnik-form/vlasnik-form.component';
import { VlasnikService } from './vlasnik.service';
import { VlasnikRoutingModule } from './vlasnik-routing.module';
import { ZiroVlasnikComponent } from './vlasnik-form/zirovlasnik.component';

 

 
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
    VlasnikRoutingModule
  ],
  declarations: [
    VlasnikComponent,
    VlasnikFormComponent,
    ZiroVlasnikComponent
  ],
  providers: [ VlasnikService,ConfirmationService ]
})


export class VlasnikModule { }
