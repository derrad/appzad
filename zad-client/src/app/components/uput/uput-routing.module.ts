import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UputComponent } from './uput.component';
import { UputFormComponent } from './uput-form/uput-form.component';


const uputRoutes: Routes = [
  { path: 'uput', component: UputComponent, canActivate: [AuthGuard] },
  { path: 'uput/new', component: UputFormComponent, canActivate: [AuthGuard] },
  { path: 'uput/:id', component: UputFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(uputRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UputRoutingModule { }
