import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignupComponent } from './signup/signup.component';
import { FinanceHomepageComponent } from './finance-homepage/finance-homepage.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TTypeComponent } from './t-type/t-type.component';
import { PackagetypeComponent } from './packagetype/packagetype.component';
import { ProgramtypeComponent } from './programtype/programtype.component';
import { TModeComponent } from './t-mode/t-mode.component';
import { ApproveComponent } from './approve/approve.component';
import { TDetailsComponent } from './t-details/t-details.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { FTimesheetViewComponent } from './f-timesheet-view/f-timesheet-view.component';
import { ActivitytypeComponent } from './activitytype/activitytype.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FinanceHomepageComponent,
    SigninComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminHomeComponent,
    TTypeComponent,
    PackagetypeComponent,
    ProgramtypeComponent,
    TModeComponent,
    ApproveComponent,
    TDetailsComponent,
    TrainerHomeComponent,
    FTimesheetViewComponent,
    ActivitytypeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
