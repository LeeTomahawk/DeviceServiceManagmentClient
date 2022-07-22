import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAvailableTaskComponent } from './task-available-task.component';

describe('TaskAvailableTaskComponent', () => {
  let component: TaskAvailableTaskComponent;
  let fixture: ComponentFixture<TaskAvailableTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAvailableTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAvailableTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
