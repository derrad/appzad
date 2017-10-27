import { AuthGuard } from './../../guards/auth.guard';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KonstantaComponent } from './konstanta.component';
import { KonstantaFormComponent } from './konstanta-form/konstanta-form.component';


const konstantaRoutes: Routes = [
  {path:'konstanta', component: KonstantaComponent, canActivate:[AuthGuard]},
  {path:'konstanta/new', component: KonstantaFormComponent, canActivate:[AuthGuard]},
  {path:'konstanta/:id', component: KonstantaFormComponent, canActivate:[AuthGuard]}
  
]
 
@NgModule({
  imports: [
    RouterModule.forChild(konstantaRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class KonstantaRoutingModule { }
