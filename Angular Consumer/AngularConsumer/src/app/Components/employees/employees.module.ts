import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';



const routes:Routes = [
  {path:"", component: ListEmployeeComponent},
  {path:"add", component: AddEmployeeComponent},
  {path:"edit", component: EditEmployeeComponent},
  {path:"details", component:DetailsEmployeeComponent},
]

@NgModule({
  declarations: [
    ListEmployeeComponent,
    DetailsEmployeeComponent,
    EditEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    HttpClientModule,
    RouterModule.forChild(routes),

  ],
  exports:[
    ListEmployeeComponent,
    DetailsEmployeeComponent
  ]
})
export class EmployeesModule { }
