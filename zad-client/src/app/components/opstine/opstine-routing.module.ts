import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpstineComponent } from './opstine.component';
import { OpstineFormComponent } from './opstine-form/opstine-form.component';


const opstineRoutes: Routes = [
  {path: 'opstine', component: OpstineComponent, canActivate: [AuthGuard]},
  {path: 'opstine/new', component: OpstineFormComponent, canActivate: [AuthGuard]},
  {path: 'opstine/:id', component: OpstineFormComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(opstineRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OpstineRoutingModule { }
