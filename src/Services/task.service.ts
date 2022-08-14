import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterNewTask } from 'src/Models/AddNewTaskDto';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiURL = 'https://localhost:7200';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getTaskList(startDate: Date, endDate: Date) {
    var datePipe = new DatePipe('en-US');
    return this.http
      .get<Task>(
        this.apiURL +
          '/api/Task/GetTasksBetweenDates?startDate=' +
          datePipe.transform(startDate, 'yyyy-MM-dd') +
          '&endDate=' +
          datePipe.transform(endDate, 'yyyy-MM-dd'),
        this.httpOptions
      )
      .toPromise();
  }

  getToAproveTasks() {
    return this.http
      .get<Task>(this.apiURL + '/api/Task/GetToAproveTasks', this.httpOptions)
      .toPromise();
  }

  getAvailableTasksList() {
    return this.http
      .get<Task>(this.apiURL + '/api/Task/GetAvailableTasks', this.httpOptions)
      .toPromise();
  }

  addNewTask(task: RegisterNewTask): Observable<RegisterNewTask> {
    return this.http.post<RegisterNewTask>(
      this.apiURL + '/api/Task',
      JSON.stringify(task),
      this.httpOptions
    );
  }
}
