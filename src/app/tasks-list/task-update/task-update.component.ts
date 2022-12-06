import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateTaskForm } from 'src/Forms/UpdateTaskForm';
import { UpdateTaskDto } from 'src/Models/UpdateTaskDto';
import { TaskService } from 'src/Services/task.service';
import { Tasks } from '../taskInterfaces';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css'],
})
export class TaskUpdateComponent implements OnInit {
  updateForm = new UpdateTaskForm();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { task: Tasks },
    private taskApiCaller: TaskService
  ) {}
  ngOnInit(): void {
    this.updateForm.controls['id'].setValue(this.data.task.id);
    this.updateForm.controls['name'].setValue(this.data.task.name);
    this.updateForm.controls['description'].setValue(
      this.data.task.description
    );
    this.updateForm.controls['activities'].setValue(this.data.task.activities);
    this.updateForm.controls['startDate'].setValue(this.data.task.startDate);
    this.updateForm.controls['endDate'].setValue(this.data.task.endDate);
    this.updateForm.controls['amount'].setValue(this.data.task.amount);
    this.updateForm.controls['taskStatus'].setValue(this.data.task.taskStatus);
  }

  update() {
    this.taskApiCaller
      .updateTask(new UpdateTaskDto(this.updateForm.value))
      .subscribe(
        (x) => {
          console.log('done');
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
