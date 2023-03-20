import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  selectedEmp: Employee | null = null;
  constructor(private empService:EmployeesService, private router:Router) { }

  ngOnInit(): void {
    this.selectedEmp = this.empService.selectedEmployee
  }

  saveEmployee(){
    if(this.selectedEmp!=null){
      this.empService.editEmployee(this.selectedEmp.id, this.selectedEmp).subscribe();
      alert(`Employee has been edited successfuly`);
      this.router.navigateByUrl(`/employees`);
    }
  }

}
