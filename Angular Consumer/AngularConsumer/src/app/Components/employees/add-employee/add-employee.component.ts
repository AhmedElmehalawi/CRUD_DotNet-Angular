import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  newEmployee: Employee ={
    id: 0,
    name: '',
    address: null,
    title: '',
    age: 0
  }
  constructor(private empService:EmployeesService, private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.empService.addEmployee(this.newEmployee).subscribe();
    alert("New Employee has been added successfully");
    this.router.navigateByUrl(`/employees`);
}

}
