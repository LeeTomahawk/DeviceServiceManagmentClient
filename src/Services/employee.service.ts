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

  getEmployeeList(params: any) {
    return this.http.get<any>(
      this.apiURL +
        '/api/Employee?SearchPharse=' +
        params.SearchPharse +
        '&PageNumber=' +
        params.PageNumber +
        '&PageSize=' +
        params.PageSize +
        '&SortBy=' +
        params.SortBy +
        '&SortDirection=' +
        params.SortDirection,
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
