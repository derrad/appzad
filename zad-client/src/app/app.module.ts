import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'; 
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
import {AuthGuard} from './guards/auth.guard';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { ModalComponent } from './components/modal/modal.component';
import { QuickMenuComponent } from './components/quick-menu/quick-menu.component'; 

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'quickmenu', component: QuickMenuComponent, canActivate:[AuthGuard]}
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), 
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


// MessagesModule,
// GrowlModule,