import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskInfo } from '../taskInterfaces';
const ELEMENT_DATA: TaskInfo = {
  name: 'asd',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar est leo, et facilisis risus sollicitudin non. Curabitur pellentesque dignissim nibh ut sodales. Donec in nulla luctus augue euismod maximus ac vitae lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis at sodales sem. Nulla pharetra sagittis justo, vitae convallis metus ornare vel. Phasellus rhoncus vestibulum massa sed suscipit. Curabitur placerat malesuada est et euismod. Aliquam dictum commodo neque nec ultricies. Duis urna mauris, interdum non sodales non, accumsan in ex. Donec nec neque scelerisque neque facilisis fringilla. Etiam laoreet ipsum venenatis vulputate maximus. Cras egestas neque id mattis ultricies. Sed non nulla nec nulla posuere molestie.',
  startDate: '12-12-1233',
  endDate: '12-12-1233',
  amount: 0,
  taskStatus: 'PRZYJETO',
  client: {
    lastVisit: '12-12-1233',
    identiti: {
      firstName: 'Bartek',
      lastName: 'Mozdzierz',
      phoneNumber: '123123123',
      address: {
        city: 'Kielce',
        street: 'Warszawsa',
        number: '12',
        postCode: '12-330',
      },
    },
  },
};
@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css'],
})
export class TaskInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { taskId: number }) {}
  dataSource: TaskInfo = ELEMENT_DATA;
  ngOnInit(): void {}
}
