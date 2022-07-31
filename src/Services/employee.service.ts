import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employee-list/employeeInterface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiURL = 'https://localhost:7200';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getEmployeeList() {
    return this.http.get<Employee>(
      this.apiURL + '/api/Employee',
      this.httpOptions
    );
  }

  getEmployeeById(id: string) {}

  getUserTaskList(userId: string) {
    return this.http.get<Task>(
      this.apiURL + '/api/Employee/Tasks/' + userId,
      this.httpOptions
    );
  }
}
