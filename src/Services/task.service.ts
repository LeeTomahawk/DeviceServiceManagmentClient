import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
