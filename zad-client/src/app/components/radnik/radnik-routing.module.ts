import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadnikComponent } from './radnik.component';
import { RadnikFormComponent } from './radnik-form/radnik-form.component';


const radnikRoutes: Routes = [
  { path: 'radnik', component: RadnikComponent, canActivate: [AuthGuard] },
  { path: 'radnik/new', component: RadnikFormComponent, canActivate: [AuthGuard] },
  { path: 'radnik/:id', component: RadnikFormComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [
    RouterModule.forChild(radnikRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RadnikRoutingModule { }
