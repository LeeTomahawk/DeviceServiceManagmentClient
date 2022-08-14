import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';
import { Client } from 'src/app/client-list/clientInterface';
import { NewTaskForm } from 'src/Forms/NewTaskForm';
import { SearchClientByPhoneNumber } from 'src/Forms/SearchClientByPhoneNumberForm';
import { RegisterNewTask } from 'src/Models/AddNewTaskDto';
import { ClientService } from 'src/Services/client.service';
import { TaskService } from 'src/Services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent implements OnInit, OnChanges {
  selectedIdentiti: any = '';
  clientPhoneForm = new SearchClientByPhoneNumber();
  myControl = new FormControl('');
  filteredOptions!: Observable<any[]>;
  clientList: any;
  isClientLoad: boolean = false;
  newTaskForm = new NewTaskForm();

  constructor(
    private clientApiCaller: ClientService,
    private datePipe: DatePipe,
    private taskApiCaller: TaskService,
    private router: Router
  ) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((val) => {
        return this.filter(val || '');
      })
    );
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['isClientLoad'];
  }

  filter(val: string): Observable<any[]> {
    return this.clientApiCaller.getClientByPhoneNumber(val).pipe(
      map((response) =>
        response.filter((option: any) => {
          return option.identiti.phoneNumber.indexOf(val) === 0;
        })
      )
    );
  }
  onSelected(val: any) {
    this.newTaskForm.controls['clientId'].setValue(val.id);
    this.selectedIdentiti = val;
    this.isClientLoad = true;
  }
  displayWith(value: any): string {
    return value
      ? value.identiti.lastName + ' ' + value?.identiti.phoneNumber
      : '';
  }

  saveTask() {
    this.newTaskForm.controls['startDate'].setValue(
      this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss')
    );
    this.taskApiCaller
      .addNewTask(new RegisterNewTask(this.newTaskForm.value))
      .subscribe(
        (x) => {
          console.log('add');
          this.router.navigate(['/task-add']).finally(() => {
            window.location.reload();
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
