import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from 'src/Services/client.service';
import { TaskService } from 'src/Services/task.service';

@Component({
  selector: 'app-client-tasks',
  templateUrl: './client-tasks.component.html',
  styleUrls: ['./client-tasks.component.css'],
})
export class ClientTasksComponent implements OnInit {
  taskList: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { clientId: string },
    private clientApiCaller: ClientService,
    private taskApiCaller: TaskService
  ) {}

  getTaskList() {
    this.clientApiCaller.getClientTaskList(this.data.clientId).subscribe(
      (data) => {
        this.taskList = data;
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  ngOnInit(): void {
    this.getTaskList();
  }

  endTask(taskId: string) {
    this.taskApiCaller.endTask(taskId).subscribe(
      () => {
        console.log('done');
        this.getTaskList();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  taskStatusMap(value: string) {
    if (value == 'RECEIVED') return 'PRZYJĘTO';
    else if (value == 'WAITING_FOR_CLIENT') return 'OCZEKIWANIE NA ODBIÓR';
    else if (value == 'IN_REPAIR') return 'W NAPRAWIE';
    else if (value == 'REPAIRED') return 'NAPRAWIONE';
    else if (value == 'NOT_REPAIRED') return 'NIE NAPRAWIONE';
    else if (value == 'COLLECTED') return 'ODEBRANE';
    return value;
  }
}
