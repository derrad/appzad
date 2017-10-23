
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
 
import { ZanimanjaComponent } from './zanimanja.component';
import { ZanimanjaFormComponent } from './zanimanja-form/zanimanja-form.component';
import { ZanimanjaRoutingModule } from './zanimanja-routing.module';
import { ZanimanjaService } from './zanimanja.service';
 

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ZanimanjaRoutingModule
  ],
  declarations: [
    ZanimanjaComponent,
    ZanimanjaFormComponent
  ],
  providers: [ ZanimanjaService ]
})
export class ZanimanjaModule {}