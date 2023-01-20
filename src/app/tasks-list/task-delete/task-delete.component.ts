import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from 'src/Services/task.service';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css'],
})
export class TaskDeleteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: { taskId: string },
    private taskSerive: TaskService,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  delete(){
    this.taskSerive.deleteTask(this.data.taskId).subscribe((e)=>{
      this._snackBar.open("Usunięto!", 'X', {
        duration: 3000
      });
    })
  }
}
