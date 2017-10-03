import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'; 
import { ButtonModule,InputTextModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';

//import { GrowlModule } from 'primeng/primeng';
//import {MessagesModule} from 'primeng/primeng';
import {FlashMessagesModule} from 'angular2-flash-messages';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {AuthService} from './services/auth/auth.service';
import {ValidateService} from './services/auth/validate.service'; 
import {DrzaveService} from './services/drzave/drzave.service';


import {AuthGuard} from './guards/auth.guard';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { ModalComponent } from './components/modal/modal.component';
import { QuickMenuComponent } from './components/quick-menu/quick-menu.component';
import { DrzaveComponent } from './components/drzave/drzave.component'; 

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'drzave', component: DrzaveComponent, canActivate:[AuthGuard]}
  // {path:'drzave', component: SfdrzaveComponent, canActivate:[AuthGuard]},
  // {path:'adddrzave', component: AdddrzaveComponent, canActivate:[AuthGuard]}
] 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    NavbarComponent,
    NavbarLeftComponent,
    ModalComponent,
    QuickMenuComponent,
    DrzaveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), 
    FlashMessagesModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    InputTextModule

  ],
  providers: [ValidateService, AuthService,AuthGuard,DrzaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// MessagesModule,
// GrowlModule,