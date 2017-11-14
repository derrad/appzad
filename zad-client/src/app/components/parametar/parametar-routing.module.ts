import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametarComponent } from './parametar.component';
import { ParametarFormComponent } from './parametar-form/parametar-form.component';

const parametarRoutes: Routes = [
     {path: 'parametar', component: ParametarComponent, canActivate: [AuthGuard]},
     {path: 'parametar/new', component: ParametarFormComponent, canActivate: [AuthGuard]},
     {path: 'parametar/:id', component: ParametarFormComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(parametarRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ParametarRoutingModule { }
