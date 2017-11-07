import { AuthGuard } from './../../guards/auth.guard';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerComponent } from './partner.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';


const partnerRoutes: Routes = [
     {path:'partner', component: PartnerComponent, canActivate:[AuthGuard]},
     {path:'partner/new', component: PartnerFormComponent, canActivate:[AuthGuard]},
     {path:'partner/:id', component: PartnerFormComponent, canActivate:[AuthGuard]},
  
]
 
@NgModule({
  imports: [
    RouterModule.forChild(partnerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PartnerRoutingModule { }
