import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { ModalComponent } from './components/modal/modal.component';
// import { DrzaveComponent } from './components/drzave/drzave.component';
// import { DrzaveFormComponent } from './components/drzave/drzave-form/drzave-form.component';
import { ParametarComponent } from './components/parametar/parametar.component';
import { ParmetarFormComponent } from './components/parametar/parmetar-form/parmetar-form.component'; 
import { RadnikComponent } from './components/radnik/radnik.component';
import { RadnikFormComponent } from './components/radnik/radnik-form/radnik-form.component';
import { OpstineComponent } from './components/opstine/opstine.component';
import { OpstineFormComponent } from './components/opstine/opstine-form/opstine-form.component';
import { MestaComponent } from './components/mesta/mesta.component';
import { MestaFormComponent } from './components/mesta/mesta-form/mesta-form.component';
import { VlasnikComponent } from './components/vlasnik/vlasnik.component';
// import { FondSatiComponent } from './components/fond-sati/fond-sati.component';
// import { FondSatiFormComponent } from './components/fond-sati/fond-sati-form/fond-sati-form.component';
import { KonstantaComponent } from './components/konstanta/konstanta.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PosaoComponent } from './components/posao/posao.component';
import { PosaoFormComponent } from './components/posao/posao-form/posao-form.component';



const routes: Routes = [
   
    // {path:'drzave', component: DrzaveComponent, canActivate:[AuthGuard]},
    // {path:'drzave/new', component: DrzaveFormComponent, canActivate:[AuthGuard]},
    // {path:'drzave/:id', component: DrzaveFormComponent, canActivate:[AuthGuard]},
    {path:'parametar', component: ParametarComponent, canActivate:[AuthGuard]},
    {path:'parametar/new', component: ParmetarFormComponent, canActivate:[AuthGuard]},
    {path:'parametar/:id', component: ParmetarFormComponent, canActivate:[AuthGuard]},
    {path:'opstine', component: OpstineComponent, canActivate:[AuthGuard]},
    {path:'opstine/new', component: OpstineFormComponent, canActivate:[AuthGuard]},
    {path:'opstine/:id', component: OpstineFormComponent, canActivate:[AuthGuard]},
 
    {path:'radnik', component: RadnikComponent, canActivate:[AuthGuard]},
    {path:'radnik/new', component: RadnikFormComponent, canActivate:[AuthGuard]},
    {path:'radnik/:id', component: RadnikFormComponent, canActivate:[AuthGuard]},
    
 
    {path:'opstine', component: OpstineComponent, canActivate:[AuthGuard]},
    {path:'mesta', component: MestaComponent, canActivate:[AuthGuard]},
    {path:'mesta/new', component: MestaFormComponent, canActivate:[AuthGuard]},
    {path:'mesta/:id', component: MestaFormComponent, canActivate:[AuthGuard]},
   
    {path:'posao', component: PosaoComponent, canActivate:[AuthGuard]},
    {path:'posao/new', component: PosaoFormComponent, canActivate:[AuthGuard]},
    {path:'posao/:id', component: PosaoFormComponent, canActivate:[AuthGuard]},
   
 
    {path:'vlasnik', component: VlasnikComponent, canActivate:[AuthGuard]},

    // {path:'fondsati', component: FondSatiComponent, canActivate:[AuthGuard]},
    // {path:'fondsati/new', component: FondSatiFormComponent, canActivate:[AuthGuard]},
    // {path:'fondsati/:id', component: FondSatiFormComponent, canActivate:[AuthGuard]},
    
 
    {path:'konstanta', component: KonstantaComponent, canActivate:[AuthGuard]},
 
    // {
    //     path: '',
    //     loadChildren: './layout/layout.module#LayoutModule',
    //     canActivate: [AuthGuard]
    // }
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // {path:'register', component: RegisterComponent},
    // {path:'login', component: LoginComponent},
    //  { path: 'not-found', component: NotFoundComponent },
    // { path: '**', redirectTo: 'not-found' }
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }