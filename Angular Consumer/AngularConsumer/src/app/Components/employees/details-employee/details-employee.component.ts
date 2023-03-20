import { Component, OnInit, Input } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {
  @Input() selectedEmployee: any;

  constructor(private empService:EmployeesService) { }

  ngOnInit(): void {
    this.selectedEmployee = this.empService.selectedEmployee;
  }


}
