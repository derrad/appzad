import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import { TranslateModule } from '@ngx-translate/core';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { NotFoundComponent } from './../components/not-found/not-found.component';
//import { HomeComponent } from './../components/home/home.component';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        FlashMessagesModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        NotFoundComponent
    ]
})
export class LayoutModule { }
