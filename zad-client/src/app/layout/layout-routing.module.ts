// import { MestaService } from './../services/mesta/mesta.service';
// import { ParametarService } from './../services/opcijeapp/parametar.service';
// import { OpstineService } from './../services/opstine/opstine.service';
// import { ConfirmationService } from 'primeng/primeng';
// import { VlasnikService } from './../services/opcijeapp/vlasnik.service';
// import { RadnikService } from './../services/opcijeapp/radnik.service';
// import { KonstanteService } from './../services/opcijeapp/konstante.service';
// import { FondSatiService } from './../services/opcijeapp/fond-sati.service';
// import { DrzaveService } from './../services/drzave/drzave.service';
// import { ValidateService } from './../services/auth/validate.service';
 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { LayoutComponent } from './layout.component';
 import { AuthGuard } from './../guards/auth.guard';
// //import { NotFoundComponent } from './../components/not-found/not-found.component';
// import { KonstantaComponent } from './../components/konstanta/konstanta.component';
// import { FondSatiComponent } from './../components/fond-sati/fond-sati.component';
// import { VlasnikComponent } from './../components/vlasnik/vlasnik.component';
// import { MestaComponent } from './../components/mesta/mesta.component';
// import { RadnikComponent } from './../components/radnik/radnik.component';
// import { OpstineFormComponent } from './../components/opstine/opstine-form/opstine-form.component';
// import { OpstineComponent } from './../components/opstine/opstine.component';
// import { ParmetarFormComponent } from './../components/parametar/parmetar-form/parmetar-form.component';
// import { ParametarComponent } from './../components/parametar/parametar.component';
// import { DrzaveFormComponent } from './../components/drzave/drzave-form/drzave-form.component';
// import { DrzaveComponent } from './../components/drzave/drzave.component';
// import { ProfileComponent } from './../components/profile/profile.component';
// import { DashboardComponent } from './../components/dashboard/dashboard.component';
//import { LoginComponent } from './../components/login/login.component';
//import { RegisterComponent } from './../components/register/register.component';
//import { HomeComponent } from './../components/home/home.component';
//import { MestaService}

//import {DrzaveService}


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
           // {path:'', component: HomeComponent},
             { path: '', loadChildren: './../components/home/home.module#HomeModule' },
            // { path:'register', component: RegisterComponent},
            // { path:'login', component: LoginComponent},
            // {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
            // {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
            // {path:'drzave', component: DrzaveComponent, canActivate:[AuthGuard]},
            // {path:'drzave/new', component: DrzaveFormComponent, canActivate:[AuthGuard]},
            // {path:'drzave/:id', component: DrzaveFormComponent, canActivate:[AuthGuard]},
            // {path:'parametar', component: ParametarComponent, canActivate:[AuthGuard]},
            // {path:'parametar/new', component: ParmetarFormComponent, canActivate:[AuthGuard]},
            // {path:'parametar/:id', component: ParmetarFormComponent, canActivate:[AuthGuard]},
            // {path:'opstine', component: OpstineComponent, canActivate:[AuthGuard]},
            // {path:'opstine/new', component: OpstineFormComponent, canActivate:[AuthGuard]},
            // {path:'opstine/:id', component: OpstineFormComponent, canActivate:[AuthGuard]},
            // {path:'radnik', component: RadnikComponent, canActivate:[AuthGuard]},
            // {path:'opstine', component: OpstineComponent, canActivate:[AuthGuard]},
            // {path:'mesta', component: MestaComponent, canActivate:[AuthGuard]},
            // {path:'vlasnik', component: VlasnikComponent, canActivate:[AuthGuard]},
            // {path:'fondsati', component: FondSatiComponent, canActivate:[AuthGuard]},
            // {path:'konstanta', component: KonstantaComponent, canActivate:[AuthGuard]}
            // ,
       

            // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },


        ]
    }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class LayoutRoutingModule { }
