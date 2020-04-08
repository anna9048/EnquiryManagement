import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddenquiryComponent } from './addenquiry/addenquiry.component';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { FollowupenquiryComponent } from './followupenquiry/followupenquiry.component';
import { LoginComponent } from './login/login.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"addenquiry",component:AddenquiryComponent},
  {path:"login",component:LoginComponent},
  {path:"coordinator",component:CoordinatorComponent,
  children:[
    {path:"followupenquiry/:enquiryId",component:FollowupenquiryComponent},
  {path:"viewenquiry",component:ViewenquiryComponent}
  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
