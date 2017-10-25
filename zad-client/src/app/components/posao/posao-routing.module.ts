import { AuthGuard } from './../../guards/auth.guard';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosaoComponent } from './posao.component';
import { PosaoFormComponent } from './posao-form/posao-form.component';


const posaoRoutes: Routes = [
  
  {path:'posao', component: PosaoComponent, canActivate:[AuthGuard]},
   {path:'posao/new', component: PosaoFormComponent, canActivate:[AuthGuard]},
   {path:'posao/:id', component: PosaoFormComponent, canActivate:[AuthGuard]},
  
]
 
@NgModule({
  imports: [
    RouterModule.forChild(posaoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PosaoRoutingModule { }