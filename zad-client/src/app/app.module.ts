import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {SidebarModule} from 'primeng/primeng';
import {AppComponent } from './app.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
// import {DateValueAccessorModule} from './shared/frmDatum/DateValueAccessorModule ';

// Meni and app komponente
// import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';

// Service
import {AuthService} from './services/auth/auth.service';
import {ValidateService} from './services/auth/validate.service';
import { ServiceValidateShared } from './services/service.validate.shared';
import {AuthGuard} from './guards/auth.guard';
import {AuthGuardGlavni} from './guards/auth.guard.glavni';
// import { DashboardService } from '. ./dashboard/dashboard.service';
import { DashboardService } from './components/dashboard/dashboard.service';


// Komponente
import { ModalComponent } from './components/modal/modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Pipe
import { KeysPipe } from './shared/pipeapp/keys.pipe';
// import { PrettyPrintPipe } from './shared/pipeapp/PrettyPrintPipe';
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
import { ZadrugarModule } from './components/zadrugar/zadrugar.module';
import { UputModule } from './components/uput/uput.module';
import { HomeModule  } from './components/home/home.module';
import { LoginModule  } from './components/login/login.module';
import { ProfileModule} from './components/profile/profile.module';

// import { ApppipeModule } from './shared/PipeApp/apppipe/apppipe.module';

//    HomeComponent,   LoginComponent, ProfileComponent,

@NgModule({
  declarations: [
      AppComponent,
      DashboardComponent,
      RegisterComponent,
      NavbarComponent,
      NavbarLeftComponent,
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
    SidebarModule,
    HomeModule,
    LoginModule,
    ProfileModule,
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
    ZadrugarModule,
    UputModule,
    AppRoutingModule

  ],
  providers: [ValidateService, AuthService, AuthGuard, AuthGuardGlavni, ServiceValidateShared, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

