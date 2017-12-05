import { PrettyActivePipe } from './../PrettyActivePipe';
import { PrettyPrintPipe } from './../PrettyPrintPipe';
import { PrettyUputStavPipe} from './../PrettyUputStavPipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrettyPrintPipe, PrettyActivePipe, PrettyUputStavPipe],
  exports: [PrettyPrintPipe, PrettyActivePipe, PrettyUputStavPipe]
})
export class ApppipeModule { }
