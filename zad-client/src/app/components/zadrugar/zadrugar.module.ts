
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { ZadrugarComponent } from './zadrugar.component';
import { ZadrugarFormComponent } from './zadrugar-form/zadrugar-form.component';
import { ZadrugarAdresaComponent} from './zadrugar-form/zadruga-adresa.component';
import { ZadrugarService } from './zadrugar.service';
import { ZadrugarRoutingModule } from './zadrugar-routing.module';
// import { PrettyPrintPipe } from './shared/pipeapp/PrettyPrintPipe';
// import { PrettyPrintPipe } from './../../shared/PipeApp/PrettyPrintPipe';
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
    ZadrugarRoutingModule,
    ApppipeModule
  ],
  declarations: [
    ZadrugarComponent,
    ZadrugarFormComponent,
    ZadrugarAdresaComponent
   ],
  providers: [ ZadrugarService, ConfirmationService ]
})
export class ZadrugarModule { }
