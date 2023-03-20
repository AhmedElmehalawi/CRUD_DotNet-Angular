import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseUrl: string = "http://localhost:5158/api";
  public selectedEmployee:Employee|null=null;

  constructor(private http: HttpClient) {}

  public getAllEmployees(){
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  public getEmployeeById(id: number){
    return this.http.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }

  public removeEmployee(id: number){
    return this.http.delete<Employee>(`${this.baseUrl}/employees/${id}`);
  }

  public addEmployee(newEmployee:Employee){
    return this.http.post<Employee>(`${this.baseUrl}/employees`,newEmployee);
  }

  public deleteEmployee(id:number){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        _id: id,
      },
    };
    return this.http.delete<Employee>(`${this.baseUrl}/employees/${id}`,options);
  }

  public editEmployee(id:number, editedEmployee:Employee){
    return this.http.put<Employee>(`${this.baseUrl}/employees/${id}`, editedEmployee);
  }
}
