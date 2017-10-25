import { AuthGuard } from './../../guards/auth.guard';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametarComponent } from './parametar.component';
import { ParmetarFormComponent } from './parmetar-form/parmetar-form.component'; 

const parametarRoutes: Routes = [
     {path:'parametar', component: ParametarComponent, canActivate:[AuthGuard]},
     {path:'parametar/new', component: ParmetarFormComponent, canActivate:[AuthGuard]},
     {path:'parametar/:id', component: ParmetarFormComponent, canActivate:[AuthGuard]},
]
 
@NgModule({
  imports: [
    RouterModule.forChild(parametarRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ParametarRoutingModule { }