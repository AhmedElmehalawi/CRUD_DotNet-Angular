import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () =>
      import('../../Components/employees/employees.module').then(
        (a) => a.EmployeesModule
      ),
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
