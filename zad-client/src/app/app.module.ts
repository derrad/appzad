
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'; 
import { ButtonModule,InputTextModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {SidebarModule} from 'primeng/primeng';
import {AppComponent } from './app.component';


//Meni and app komponente
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';

//Service
import {AuthService} from './services/auth/auth.service';
import {ValidateService} from './services/auth/validate.service'; 
import { ServiceValidateShared } from './services/service.validate.shared';
// import {DrzaveService} from './services/drzave/drzave.service';
//import {MestaService} from './services/mesta/mesta.service';
//import {ParametarService} from './services/opcijeapp/parametar.service';
//import {FondSatiService} from './services/opcijeapp/fond-sati.service';
import {KonstanteService} from './services/opcijeapp/konstante.service';
//import {RadnikService} from './services/opcijeapp/radnik.service';
import {VlasnikService} from './services/opcijeapp/vlasnik.service';
//import {PosaoService} from './components/posao/posao.service';
import {AuthGuard} from './guards/auth.guard';
import {AuthGuardGlavni} from './guards/auth.guard.glavni';


//Komponente 
import { ModalComponent } from './components/modal/modal.component';
// import { DrzaveComponent } from './components/drzave/drzave.component';
// import { DrzaveFormComponent } from './components/drzave/drzave-form/drzave-form.component';
//import { ParametarComponent } from './components/parametar/parametar.component';
//import { ParmetarFormComponent } from './components/parametar/parmetar-form/parmetar-form.component'; 
// import { RadnikComponent } from './components/radnik/radnik.component';
// import { RadnikFormComponent } from './components/radnik/radnik-form/radnik-form.component';
// import { OpstineComponent } from './components/opstine/opstine.component';
// import { OpstineFormComponent } from './components/opstine/opstine-form/opstine-form.component';
// import { MestaComponent } from './components/mesta/mesta.component';
// import { MestaFormComponent } from './components/mesta/mesta-form/mesta-form.component';

import { VlasnikComponent } from './components/vlasnik/vlasnik.component';
// import { FondSatiComponent } from './components/fond-sati/fond-sati.component';
// import { FondSatiFormComponent } from './components/fond-sati/fond-sati-form/fond-sati-form.component';
import { KonstantaComponent } from './components/konstanta/konstanta.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { PosaoComponent } from './components/posao/posao.component';
// import { PosaoFormComponent } from './components/posao/posao-form/posao-form.component';
//Pipe 
import { KeysPipe } from './shared/pipeapp/keys.pipe';
//import { DecimalMask } from './directive/decimal-mask.directive';
// import { DecimalPipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
// import { ZanimanjaComponent } from './components/zanimanja/zanimanja.component';
// import { ZanimanjaFormComponent } from './components/zanimanja/zanimanja-form/zanimanja-form.component';
import { ZanimanjaModule } from './components/zanimanja/zanimanja.module';
import { DrzaveModule } from './components/drzave/drzave.module';
import { OpstineModule } from './components/opstine/opstine.module';
import { FondSatiModule } from './components/fond-sati/fond-sati.module';
import { MestaModule } from './components/mesta/mesta.module';
import { RadnikModule } from './components/radnik/radnik.module';
import { PosaoModule } from './components/posao/posao.module';
import { ParametarModule } from './components/parametar/parametar.module';



 const appRoutes: Routes =  [
    {path:'', component: HomeComponent},
    {path:'register', component: RegisterComponent,canActivate:[AuthGuardGlavni]},
    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},

  //  {path:'drzave', component: DrzaveComponent, canActivate:[AuthGuard]},
  //  {path:'drzave/new', component: DrzaveFormComponent, canActivate:[AuthGuard]},
  //  {path:'drzave/:id', component: DrzaveFormComponent, canActivate:[AuthGuard]},
  //  {path:'parametar', component: ParametarComponent, canActivate:[AuthGuard]},
  //  {path:'parametar/new', component: ParmetarFormComponent, canActivate:[AuthGuard]},
  //  {path:'parametar/:id', component: ParmetarFormComponent, canActivate:[AuthGuard]},
  //  {path:'opstine', component: OpstineComponent, canActivate:[AuthGuard]},
  //  {path:'opstine/new', component: OpstineFormComponent, canActivate:[AuthGuard]},
  //  {path:'opstine/:id', component: OpstineFormComponent, canActivate:[AuthGuard]},

  //  {path:'radnik', component: RadnikComponent, canActivate:[AuthGuard]},
  //  {path:'radnik/new', component: RadnikFormComponent, canActivate:[AuthGuard]},
  //  {path:'radnik/:id', component: RadnikFormComponent, canActivate:[AuthGuard]},
   

  //  {path:'opstine', component: OpstineComponent, canActivate:[AuthGuard]},
  //  {path:'mesta', component: MestaComponent, canActivate:[AuthGuard]},
  //  {path:'mesta/new', component: MestaFormComponent, canActivate:[AuthGuard]},
  //  {path:'mesta/:id', component: MestaFormComponent, canActivate:[AuthGuard]},
  
  //  {path:'posao', component: PosaoComponent, canActivate:[AuthGuard]},
  //  {path:'posao/new', component: PosaoFormComponent, canActivate:[AuthGuard]},
  //  {path:'posao/:id', component: PosaoFormComponent, canActivate:[AuthGuard]},
  

  //  {path:'vlasnik', component: VlasnikComponent, canActivate:[AuthGuard]},
  //  {path:'fondsati', component: FondSatiComponent, canActivate:[AuthGuard]},
  //  {path:'fondsati/new', component: FondSatiFormComponent, canActivate:[AuthGuard]},
  //  {path:'fondsati/:id', component: FondSatiFormComponent, canActivate:[AuthGuard]},
   

  //  {path:'konstanta', component: KonstantaComponent, canActivate:[AuthGuard]},


   { path: 'not-found', component: NotFoundComponent },
   { path: '**', redirectTo: 'not-found' }
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
      VlasnikComponent,
      KonstantaComponent,
      NotFoundComponent,
      KeysPipe
     
     
    //  DecimalMask
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpModule,
    RouterModule.forRoot(appRoutes), // <-- debugging purposes only { enableTracing: true }
    FlashMessagesModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    InputTextModule,
    ConfirmDialogModule,
    DialogModule,
    SidebarModule,
    DrzaveModule,
    OpstineModule,
    ZanimanjaModule,
    FondSatiModule,
    MestaModule,
    RadnikModule,
    PosaoModule,
    ParametarModule,
    AppRoutingModule

  ],
  providers: [ValidateService, AuthService,AuthGuard,AuthGuardGlavni,ServiceValidateShared,
    KonstanteService,
    VlasnikService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

