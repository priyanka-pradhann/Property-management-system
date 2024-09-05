import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { TimeSlotComponent } from './property-owner/masters/time-slot/time-slot.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddtimeslotComponent } from './property-owner/masters/addtimeslot/addtimeslot.component';
import { EditTimeslotComponent } from './property-owner/masters/edit-timeslot/edit-timeslot.component';
import { GetWordsComponent } from './test/dictionary/get-words/get-words.component';
import { RandomPagesComponent } from './test/random-pages/random-pages.component';
import { RandomNumberComponent } from './test/random-number/random-number.component';
import { ValidationComponent } from './test/validation/validation.component';
import { GetColourComponent } from './test/get-colour/get-colour.component';
import { MetalBaazarComponent } from './test/metal-baazar/metal-baazar.component';
import { ViewMetalDetailsComponent } from './test/view-metal-details/view-metal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TimeSlotComponent,
    AddtimeslotComponent,
    EditTimeslotComponent,
    GetWordsComponent,
    RandomPagesComponent,
    RandomNumberComponent,
    ValidationComponent,
    GetColourComponent,
    MetalBaazarComponent,
    ViewMetalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
