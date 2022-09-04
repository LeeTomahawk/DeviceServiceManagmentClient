import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from 'src/app/manager-list/managerInterface';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  apiURL = 'https://localhost:7200';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getManagerList(params: any) {
    return this.http.get<any>(
      this.apiURL +
        '/api/Manager?SearchPharse=' +
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

  addTaskToEmployee(taskId: string, employeeId: string) {
    return this.http.post<any>(
      this.apiURL +
        '/api/Manager/AddTaskToEmployee?taskId=' +
        taskId +
        '&employeeId=' +
        employeeId,
      this.httpOptions
    );
  }

  setTaskToApproval(taskId: string) {
    return this.http.post<any>(
      this.apiURL + '/api/Manager/TaskAprove?taskId=' + taskId,
      this.httpOptions
    );
  }
}
