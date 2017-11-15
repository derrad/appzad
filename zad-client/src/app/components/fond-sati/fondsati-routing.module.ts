import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FondSatiComponent } from './fond-sati.component';
import { FondSatiFormComponent } from './fond-sati-form/fond-sati-form.component';


const fondsatiRoutes: Routes = [
  {path: 'fondsati', component: FondSatiComponent, canActivate: [AuthGuard]},
  {path: 'fondsati/new', component: FondSatiFormComponent, canActivate: [AuthGuard]},
  {path: 'fondsati/:id', component: FondSatiFormComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(fondsatiRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FondSatiRoutingModule { }
