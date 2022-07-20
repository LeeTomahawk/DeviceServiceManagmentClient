import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { Tasks } from './taskInterfaces';

const ELEMENT_DATA: Tasks[] = [
  {
    id: '123123sdad',
    position: 1,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    data: '19-07-2022',
    status: 'OTRZYMANO',
  },
  {
    id: '123123sdad',
    position: 2,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    data: '19-07-2022',
    status: 'OTRZYMANO',
  },
  {
    id: '123123sdad',
    position: 3,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    data: '19-07-2022',
    status: 'OTRZYMANO',
  },
  {
    id: '123123sdad',
    position: 4,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    'status',
    'data',
    'info',
    'update',
    'delete',
  ];
  dataSource = ELEMENT_DATA;
  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openInfoDialog(id: string) {
    const dialogRef = this.infoDialog.open(TaskInfoComponent, {
      data: { taskId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }

  openUpdateDialog(id: string) {
    const dialogRef = this.updateDialog.open(TaskUpdateComponent, {
      data: { taskId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }

  openDeleteDialog(id: string) {
    const dialogRef = this.deleteDialog.open(TaskDeleteComponent, {
      data: { taskId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
}
