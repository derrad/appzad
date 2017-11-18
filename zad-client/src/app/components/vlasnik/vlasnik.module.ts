import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { VlasnikComponent } from './vlasnik.component';
import { VlasnikFormComponent } from './vlasnik-form/vlasnik-form.component';
import { VlasnikService } from './vlasnik.service';
import { VlasnikRoutingModule } from './vlasnik-routing.module';
import { ZiroVlasnikComponent } from './vlasnik-form/zirovlasnik.component';
import { TelefonVlasnikComponent } from './vlasnik-form/telefonvlasnik.component';
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
    VlasnikRoutingModule
  ],
  declarations: [
    VlasnikComponent,
    VlasnikFormComponent,
    ZiroVlasnikComponent,
    TelefonVlasnikComponent
  ],
  providers: [ VlasnikService, ConfirmationService ]
})


export class VlasnikModule { }
