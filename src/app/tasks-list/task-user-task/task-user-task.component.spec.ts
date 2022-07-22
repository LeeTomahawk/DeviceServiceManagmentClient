import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUserTaskComponent } from './task-user-task.component';

describe('TaskUserTaskComponent', () => {
  let component: TaskUserTaskComponent;
  let fixture: ComponentFixture<TaskUserTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskUserTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUserTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
