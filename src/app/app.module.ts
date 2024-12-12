import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeService } from './services/employee.service';
import {AppRoutingModule} from "./app-routing.module";
import {Button, ButtonDirective} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {DropdownModule} from "primeng/dropdown";
import {ImageModule} from "primeng/image";
import {TooltipModule} from "primeng/tooltip";
import { CurrentEmployeesComponent } from './components/current-employees/current-employees.component';
import { PreviousEmployeesComponent } from './components/previous-employees/previous-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    CurrentEmployeesComponent,
    PreviousEmployeesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    ButtonDirective,
    Button,
    NgOptimizedImage,
    CalendarModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    DropdownModule,
    ImageModule,
    TooltipModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
