import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // <--- Routing rules imported
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { NewexpertiseComponent } from './newexpertise/newexpertise.component';
import { NewactivityComponent } from './newactivity/newactivity.component';
import { EditexpertiseComponent } from './editexpertise/editexpertise.component';
import { EditactivityComponent } from './editactivity/editactivity.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LogoutComponent,
    ExpertiseComponent,
    NewexpertiseComponent,
    NewactivityComponent,
    EditexpertiseComponent,
    EditactivityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
