import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZadrugarComponent } from './zadrugar.component';
import { ZadrugarFormComponent } from './zadrugar-form/zadrugar-form.component';


const zadrRoutes: Routes = [
     {path: 'zadrugar', component: ZadrugarComponent, canActivate: [AuthGuard]},
     {path: 'zadrugar/new', component: ZadrugarFormComponent, canActivate: [AuthGuard]},
     {path: 'zadrugar/:id', component: ZadrugarFormComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(zadrRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ZadrugarRoutingModule { }
