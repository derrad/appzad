import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {SidebarModule} from 'primeng/primeng';
import {AppComponent } from './app.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {DateValueAccessorModule} from './shared/frmDatum/DateValueAccessorModule ';


// Meni and app komponente
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';

// Service
import {AuthService} from './services/auth/auth.service';
import {ValidateService} from './services/auth/validate.service';
import { ServiceValidateShared } from './services/service.validate.shared';
import {AuthGuard} from './guards/auth.guard';
import {AuthGuardGlavni} from './guards/auth.guard.glavni';


// Komponente
import { ModalComponent } from './components/modal/modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Pipe
import { KeysPipe } from './shared/pipeapp/keys.pipe';
// Module
import { AppRoutingModule } from './app-routing.module';
import { ZanimanjaModule } from './components/zanimanja/zanimanja.module';
import { DrzaveModule } from './components/drzave/drzave.module';
import { OpstineModule } from './components/opstine/opstine.module';
import { FondSatiModule } from './components/fond-sati/fond-sati.module';
import { MestaModule } from './components/mesta/mesta.module';
import { RadnikModule } from './components/radnik/radnik.module';
import { PosaoModule } from './components/posao/posao.module';
import { ParametarModule } from './components/parametar/parametar.module';
import { VlasnikModule } from './components/vlasnik/vlasnik.module';
import { KonstantaModule } from './components/konstanta/konstanta.module';
import { PartnerModule } from './components/partner/partner.module';
import { BankeModule } from './components/banke/banke.module';


@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      DashboardComponent,
      ProfileComponent,
      RegisterComponent,
      NavbarComponent,
     // NavbarLeftComponent,
      ModalComponent,
      NotFoundComponent,
      KeysPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpModule,
    FlashMessagesModule,
    DateValueAccessorModule,
    SidebarModule,
    DrzaveModule,
    OpstineModule,
    ZanimanjaModule,
    FondSatiModule,
    MestaModule,
    RadnikModule,
    PosaoModule,
    ParametarModule,
    VlasnikModule,
    KonstantaModule,
    PartnerModule,
    BankeModule,
    AppRoutingModule

  ],
  providers: [ValidateService, AuthService, AuthGuard, AuthGuardGlavni, ServiceValidateShared],
  bootstrap: [AppComponent]
})
export class AppModule { }

