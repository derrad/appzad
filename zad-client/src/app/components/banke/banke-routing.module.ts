import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankeComponent } from './banke.component';
import { BankeFormComponent } from './banke-form/banke-form.component';


const bankeRoutes: Routes = [
  { path: 'banke', component: BankeComponent, canActivate: [AuthGuard] },
  { path: 'banke/new', component: BankeFormComponent, canActivate: [AuthGuard] },
  { path: 'banke/:id', component: BankeFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(bankeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BankeRoutingModule { }

