import { PrettyActivePipe } from './../PrettyActivePipe';
import { PrettyPrintPipe } from './../PrettyPrintPipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrettyPrintPipe, PrettyActivePipe],
  exports: [PrettyPrintPipe, PrettyActivePipe]
})
export class ApppipeModule { }
