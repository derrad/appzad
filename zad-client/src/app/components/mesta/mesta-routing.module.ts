import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MestaComponent } from './mesta.component';
import { MestaFormComponent } from './mesta-form/mesta-form.component';


const drzaveRoutes: Routes = [
  {path: 'mesta', component: MestaComponent, canActivate: [AuthGuard]},
  {path: 'mesta/new', component: MestaFormComponent, canActivate: [AuthGuard]},
  {path: 'mesta/:id', component: MestaFormComponent, canActivate: [AuthGuard]},
];
@NgModule({
  imports: [
    RouterModule.forChild(drzaveRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MestaRoutingModule { }
