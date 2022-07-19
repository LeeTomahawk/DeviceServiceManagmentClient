import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskInfoComponent } from './task-info/task-info.component';
import { Tasks } from './taskInterfaces';

const ELEMENT_DATA: Tasks[] = [
  {
    id: '123123sdad',
    position: 1,
    name: 'Hydrogen',
    data: '19-07-2022',
    status: 'OTRZYMANO',
  },
  {
    id: '123123sdad',
    position: 2,
    name: 'Hydrogen',
    data: '19-07-2022',
    status: 'OTRZYMANO',
  },
  {
    id: '123123sdad',
    position: 3,
    name: 'Hydrogen',
    data: '19-07-2022',
    status: 'OTRZYMANO',
  },
];

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'data',
    'status',
    'info',
    'update',
    'delete',
  ];
  dataSource = ELEMENT_DATA;
  constructor(private infoDialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(id: number) {
    const dialogRef = this.infoDialog.open(TaskInfoComponent, {
      data: { taskId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
}
