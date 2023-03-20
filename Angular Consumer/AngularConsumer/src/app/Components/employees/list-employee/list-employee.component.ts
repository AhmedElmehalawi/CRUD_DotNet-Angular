import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit, OnChanges {
  selectedEmployee: any;
  employees: Employee[]=[];
  constructor(private empService:EmployeesService, private router:Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.empService.getAllEmployees().subscribe(e=> this.employees=e);
  }

  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe(e=> this.employees=e);
  }

  showEmployeeDetails(emp: Employee) {
    this.router.navigateByUrl(`/employees/details`);
    this.empService.selectedEmployee = emp
  }
  editEmployee(emp: Employee) {
    this.router.navigateByUrl(`/employees/edit`);
    this.empService.selectedEmployee = emp
  }
  
  deleteEmployee(emp:Employee){
    if(!confirm(`Are you sure you wanna delete ${emp.name}`))
      return;
    this.empService.removeEmployee(emp.id).subscribe();
    this.employees.splice(this.employees.indexOf(emp),1);
    this.employees = [...this.employees];
  }

}
