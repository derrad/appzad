import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrzaveComponent } from './drzave.component';
import { DrzaveFormComponent } from './drzave-form/drzave-form.component';


const drzaveRoutes: Routes = [
  { path: 'drzave', component: DrzaveComponent, canActivate: [AuthGuard] },
  { path: 'drzave/new', component: DrzaveFormComponent, canActivate: [AuthGuard] },
  { path: 'drzave/:id', component: DrzaveFormComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [
    RouterModule.forChild(drzaveRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DrzaveRoutingModule { }
