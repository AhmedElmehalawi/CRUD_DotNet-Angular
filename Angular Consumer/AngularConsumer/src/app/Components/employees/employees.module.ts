import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { RouterModule, Routes } from '@angular/router';



const routes:Routes = [
  {path:"", component: ListEmployeeComponent},
  // {path:"add", component: AddServiceComponent},
  // {path:"edit", component: EditServiceComponent},
  {path:"details", component:DetailsEmployeeComponent},
]

@NgModule({
  declarations: [
    ListEmployeeComponent,
    DetailsEmployeeComponent
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
