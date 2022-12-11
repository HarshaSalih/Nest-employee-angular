import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskStatusComponent } from './view-task-status/view-task-status.component';
import { ViewMyTaskComponent } from './view-my-task/view-my-task.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"employeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"addemployee",
    component:AddEmployeeComponent
  },
  {
    path:"addtask",
    component:AddTaskComponent
  },
  {
    path:"viewtaskstatus",
    component:ViewTaskStatusComponent
  },
  {
    path:"viewmytask",
    component:ViewMyTaskComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    AdminNavComponent,
    EmployeeNavComponent,
    AddEmployeeComponent,
    AddTaskComponent,
    ViewTaskStatusComponent,
    ViewMyTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
