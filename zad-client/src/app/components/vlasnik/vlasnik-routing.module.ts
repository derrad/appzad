import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VlasnikComponent } from './vlasnik.component';
import { VlasnikFormComponent } from './vlasnik-form/vlasnik-form.component';


const vlasnikRoutes: Routes = [
  { path: 'vlasnik', component: VlasnikComponent, canActivate: [AuthGuard] },
  { path: 'vlasnik/new', component: VlasnikFormComponent, canActivate: [AuthGuard] },
  { path: 'vlasnik/:id', component: VlasnikFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(vlasnikRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class VlasnikRoutingModule { }
