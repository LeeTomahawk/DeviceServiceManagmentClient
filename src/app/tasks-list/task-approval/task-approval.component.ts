import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskInfoComponent } from '../task-info/task-info.component';
import { TaskUpdateComponent } from '../task-update/task-update.component';
import { Tasks } from '../taskInterfaces';

const ELEMENT_DATA: Tasks[] = [
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar est leo, et facilisis risus sollicitudin non. Curabitur pellentesque dignissim nibh ut sodales. Donec in nulla luctus augue euismod maximus ac vitae lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis at sodales sem. Nulla pharetra sagittis justo, vitae convallis metus ornare vel. Phasellus rhoncus vestibulum massa sed suscipit. ',
    activities:
      'Pełna diagnostyka, rebaling procesora i karty graficznej. Komputer nie daje oznak życia. Nie do naprawienia!',
    startDate: '12-12-1233',
    endDate: '',
    amount: 100,
    taskStatus: 'NIE DO NAPRAWY',
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
  },
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar est leo, et facilisis risus sollicitudin non. Curabitur pellentesque dignissim nibh ut sodales. Donec in nulla luctus augue euismod maximus ac vitae lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis at sodales sem. Nulla pharetra sagittis justo, vitae convallis metus ornare vel. Phasellus rhoncus vestibulum massa sed suscipit. Curabitur placerat malesuada est et euismod. Aliquam dictum commodo neque nec ultricies. Duis urna mauris, interdum non sodales non, accumsan in ex. Donec nec neque scelerisque neque facilisis fringilla. Etiam laoreet ipsum venenatis vulputate maximus. Cras egestas neque id mattis ultricies. Sed non nulla nec nulla posuere molestie.',
    activities: '',
    startDate: '12-12-1233',
    endDate: '12-12-1233',
    amount: 0,
    taskStatus: 'NAPRAWIONE',
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
  },
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar est leo, et facilisis risus sollicitudin non. Curabitur pellentesque dignissim nibh ut sodales. Donec in nulla luctus augue euismod maximus ac vitae lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis at sodales sem. Nulla pharetra sagittis justo, vitae convallis metus ornare vel. Phasellus rhoncus vestibulum massa sed suscipit. Curabitur placerat malesuada est et euismod. Aliquam dictum commodo neque nec ultricies. Duis urna mauris, interdum non sodales non, accumsan in ex. Donec nec neque scelerisque neque facilisis fringilla. Etiam laoreet ipsum venenatis vulputate maximus. Cras egestas neque id mattis ultricies. Sed non nulla nec nulla posuere molestie.',
    activities: '',
    startDate: '12-12-1233',
    endDate: '12-12-1233',
    amount: 0,
    taskStatus: 'NAPRAWIONE',
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
  },
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar est leo, et facilisis risus sollicitudin non. Curabitur pellentesque dignissim nibh ut sodales. Donec in nulla luctus augue euismod maximus ac vitae lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis at sodales sem. Nulla pharetra sagittis justo, vitae convallis metus ornare vel. Phasellus rhoncus vestibulum massa sed suscipit. Curabitur placerat malesuada est et euismod. Aliquam dictum commodo neque nec ultricies. Duis urna mauris, interdum non sodales non, accumsan in ex. Donec nec neque scelerisque neque facilisis fringilla. Etiam laoreet ipsum venenatis vulputate maximus. Cras egestas neque id mattis ultricies. Sed non nulla nec nulla posuere molestie.',
    activities: '',
    startDate: '12-12-1233',
    endDate: '12-12-1233',
    amount: 0,
    taskStatus: 'NAPRAWIONE',
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
  },
];
@Component({
  selector: 'app-task-approval',
  templateUrl: './task-approval.component.html',
  styleUrls: ['./task-approval.component.css'],
})
export class TaskApprovalComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'position',
    'name',
    'status',
    'data',
    'info',
    'update',
    'approv',
  ];

  constructor(private infoDialog: MatDialog, private updateDialog: MatDialog) {}

  openInfoDialog(task: Tasks) {
    const dialogRef = this.infoDialog.open(TaskInfoComponent, {
      data: { task },
    });
  }

  openUpdateDialog(task: Tasks) {
    const dialogRef = this.updateDialog.open(TaskUpdateComponent, {
      data: { task },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
  ngOnInit(): void {}
}
