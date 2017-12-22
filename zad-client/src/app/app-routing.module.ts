import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import {AuthGuardGlavni} from './guards/auth.guard.glavni';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



const appRoutes: Routes =  [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuardGlavni]},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
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
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
