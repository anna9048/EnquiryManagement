import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddenquiryComponent } from './addenquiry/addenquiry.component';
import { FormsModule, ReactiveFormsModule}from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { FollowupenquiryComponent } from './followupenquiry/followupenquiry.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';

@NgModule({
  declarations: [
    AppComponent,
    AddenquiryComponent,
    ViewenquiryComponent,
    FollowupenquiryComponent,
    LoginComponent,
    CoordinatorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
