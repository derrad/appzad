
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
 
import { ZanimanjaComponent } from './zanimanja.component';
import { ZanimanjaFormComponent } from './zanimanja-form/zanimanja-form.component';
import { ZanimanjaRoutingModule } from './zanimanja-routing.module';
import { ZanimanjaService } from './zanimanja.service';
 

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConfirmDialogModule,
    DialogModule,
    ZanimanjaRoutingModule
  ],
  declarations: [
    ZanimanjaComponent,
    ZanimanjaFormComponent
  ],
  providers: [ ZanimanjaService,ConfirmationService ]
})
export class ZanimanjaModule {}