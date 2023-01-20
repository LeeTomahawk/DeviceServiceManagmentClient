import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterNewTask } from 'src/Models/AddNewTaskDto';
import { UpdateClientDto } from 'src/Models/ClientUpdateDto';
import { UpdateTaskDto } from 'src/Models/UpdateTaskDto';
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

  getTaskList(startDate: Date, endDate: Date, params: any) {
    var datePipe = new DatePipe('en-US');
    return this.http
      .get<any>(
        this.apiURL +
          '/api/Task?SearchPharse=' +
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
      )
      .toPromise();
  }

  getToAproveTasks(params: any) {
    return this.http
      .get<any>(
        this.apiURL +
          '/api/Task/GetToAproveTasks?SearchPharse=' +
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
      )
      .toPromise();
  }

  getAvailableTasksList(params: any) {
    return this.http
      .get<any>(
        this.apiURL +
          '/api/Task/GetAvailableTasks?SearchPharse=' +
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
      )
      .toPromise();
  }

  addNewTask(task: RegisterNewTask): Observable<RegisterNewTask> {
    return this.http.post<RegisterNewTask>(
      this.apiURL + '/api/Task',
      JSON.stringify(task),
      this.httpOptions
    );
  }

  endTask(taskId: string) {
    return this.http.post<any>(
      this.apiURL + '/api/Task/EndTask?taskId=' + taskId,
      this.httpOptions
    );
  }

  updateTask(task: UpdateTaskDto) {
    return this.http.put<UpdateClientDto>(
      this.apiURL + '/api/Task',
      JSON.stringify(task),
      this.httpOptions
    );
  }

  deleteTask(taskId: string) {
    return this.http.delete<any>(
      this.apiURL + '/api/Task/'+taskId,
      this.httpOptions
    );
  }
}
