import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TTypeComponent } from './t-type/t-type.component';
import { TModeComponent } from './t-mode/t-mode.component';
import { PackagetypeComponent } from './packagetype/packagetype.component';
import { ProgramtypeComponent } from './programtype/programtype.component';
import { ApproveComponent } from './approve/approve.component';
import { TDetailsComponent } from './t-details/t-details.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { FinanceHomepageComponent } from './finance-homepage/finance-homepage.component';
import { FTimesheetViewComponent } from './f-timesheet-view/f-timesheet-view.component';
import { ActivitytypeComponent } from './activitytype/activitytype.component';
import { TrainerAddTimesheetComponent } from './trainer-add-timesheet/trainer-add-timesheet.component';
import { FinanceExpenseViewComponent } from './finance-expense-view/finance-expense-view.component';
import { TrainerSalaryRecieptComponent } from './trainer-salary-reciept/trainer-salary-reciept.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'admin-home',component:AdminHomeComponent,
  children:[
   {path:'t-type',component:TTypeComponent},
   {path:'t-mode',component:TModeComponent},
   {path:'t-mode',component:TModeComponent},
   {path:'packagetype',component:PackagetypeComponent},
   {path:'programtype',component:ProgramtypeComponent},
   {path:'activitytype',component:ActivitytypeComponent},
   {path:'approve',component:ApproveComponent},
   {path:'t-details',component:TDetailsComponent}
  ]},
  {path:'trainer-home',component:TrainerHomeComponent,
  children:[
    {path:'trainer-add-timesheet',component:TrainerAddTimesheetComponent},
    {path:'trainer-salary-reciept',component:TrainerSalaryRecieptComponent},
    {path:'add-expense',component:AddExpenseComponent}
  ]},
  {path:'finance-home',component:FinanceHomepageComponent,
  children:[
    {path:'f-timesheet-view',component:FTimesheetViewComponent},
    {path:'finance-expense-view',component:FinanceExpenseViewComponent}

  ]}
  
   

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
