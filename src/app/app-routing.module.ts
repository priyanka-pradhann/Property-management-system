import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeSlotComponent } from './property-owner/masters/time-slot/time-slot.component';
import { AddtimeslotComponent } from './property-owner/masters/addtimeslot/addtimeslot.component';
import { EditTimeslotComponent } from './property-owner/masters/edit-timeslot/edit-timeslot.component';
import { GetWordsComponent } from './test/dictionary/get-words/get-words.component';
import { RandomPagesComponent } from './test/random-pages/random-pages.component';
import { RandomNumberComponent } from './test/random-number/random-number.component';
import { ValidationComponent } from './test/validation/validation.component';
import { GetColourComponent } from './test/get-colour/get-colour.component';
import { MetalBaazarComponent } from './test/metal-baazar/metal-baazar.component';
import { ViewMetalDetailsComponent } from './test/view-metal-details/view-metal-details.component';
const routes: Routes = [
  { path:"master/timeslot",component:TimeSlotComponent},
  { path:"addtimeslot",component:AddtimeslotComponent},
  { path:"edit-timeslot",component:EditTimeslotComponent},
  { path:"get-words",component: GetWordsComponent},
  { path:"get-pages",component: RandomPagesComponent},
  { path:"get-numbers",component: RandomNumberComponent},
  { path:"form-validation",component: ValidationComponent},
  { path:"get-colour",component: GetColourComponent},
  { path:"metalbaazar",component: MetalBaazarComponent},
  { path:"view-metalbaazar",component: ViewMetalDetailsComponent},





  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
