import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { RegisterComponent } from "app/register/register.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { LogoutComponent } from "app/logout/logout.component";
import { ExpertiseComponent } from "app/expertise/expertise.component";
import { NewexpertiseComponent } from "app/newexpertise/newexpertise.component";
import { NewactivityComponent } from "app/newactivity/newactivity.component";
import { EditexpertiseComponent } from "app/editexpertise/editexpertise.component";
import { EditactivityComponent } from "app/editactivity/editactivity.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'expertise/:id',
    component: ExpertiseComponent
  },
  {
    path: 'newexpertise',
    component: NewexpertiseComponent
  },
  {
    path: 'editexpertise/:id',
    component: EditexpertiseComponent
  },
  {
    path: 'newactivity/:id',
    component: NewactivityComponent
  },
  {
    path: 'editactivity/:id',
    component: EditactivityComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }