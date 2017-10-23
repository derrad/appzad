import { AuthGuard } from './../../guards/auth.guard';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZanimanjaComponent } from './zanimanja.component';
import { ZanimanjaFormComponent } from './zanimanja-form/zanimanja-form.component';


const zanimanjaRoutes: Routes = [
  { path: 'zanimanja',  component: ZanimanjaComponent, canActivate:[AuthGuard] },
  { path: 'zanimanja/:id', component: ZanimanjaFormComponent, canActivate:[AuthGuard] },
  { path: 'zanimanja/new', component: ZanimanjaFormComponent, canActivate:[AuthGuard] },
]
 
@NgModule({
  imports: [
    RouterModule.forChild(zanimanjaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ZanimanjaRoutingModule { }