/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { } from ''
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';
import {appRoutingProviders, routing} from './route';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminleftsidebarComponent } from './adminleftsidebar/adminleftsidebar.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { LoginComponent } from './login/login.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { VendoraddComponent } from './vendoradd/vendoradd.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { HealeraddComponent } from './healeradd/healeradd.component';
import { HealereditComponent } from './healeredit/healeredit.component';
import { HealerlistComponent } from './healerlist/healerlist.component';
import { SpeakeraddComponent } from './speakeradd/speakeradd.component';
import { SpeakereditComponent } from './speakeredit/speakeredit.component';
import { SpeakerlistComponent } from './speakerlist/speakerlist.component';
import { BoothTableComponent } from './boothtable/booth-table.component';
import { ConventionCenterComponent } from './conventioncenter/convention-center.component';
import { IndexComponent } from './index/index.component';
import { PresentersComponent } from './presenters/presenters.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutSpiritconComponent } from './aboutspiritcon/about-spiritcon.component';
import { AgendaComponent } from './agenda/agenda.component';
import { TravellodgingComponent } from './travellodging/travellodging.component';
import { PastEventsComponent } from './past-events/past-events.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderBy } from './orderby';
import { UsersearchPipe } from './search.pipe';
import { CKEditorModule } from 'ng2-ckeditor';
//noinspection TypeScriptCheckImport
//import { NgUploaderModule } from 'ngx-uploader';
import { NgxUploaderModule } from 'ngx-uploader';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ReadersComponent } from './readers/readers.component';
import { PastEvents2019Component } from './pastevents2019/pastevents2019.component';


import { FileUploadModule } from 'file-upload-lib-influxiq';

import {DemoMaterialModule} from '../app/material-module';



@NgModule({
  declarations: [
    AppComponent,
    AddadminComponent,
    AdminheaderComponent,
    AdminleftsidebarComponent,
    EditadminComponent,
    AdminlistComponent,
    OrderBy,
    UsersearchPipe,
    LoginComponent,
    DashboardComponent,
    VendoraddComponent,
    VendoreditComponent,
    VendorlistComponent,
    HealerlistComponent,
    HealeraddComponent,
    HealereditComponent,
    SpeakeraddComponent,
    SpeakerlistComponent,
    SpeakereditComponent,
    BoothTableComponent,
    ConventionCenterComponent,
    PresentersComponent,
    IndexComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent,
    AboutSpiritconComponent,
    AgendaComponent,
    TravellodgingComponent,
    PastEventsComponent,
    SponsorComponent,
    ReadersComponent,
    PastEvents2019Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    ModalModule.forRoot(),
    CKEditorModule,
   // NgUploaderModule,
    NgxUploaderModule,
    AngularDateTimePickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    FileUploadModule,
    DemoMaterialModule
  ],
  providers: [appRoutingProviders, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
