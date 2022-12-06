import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklplaceAddEmployeeComponent } from './worklplace-add-employee.component';

describe('WorklplaceAddEmployeeComponent', () => {
  let component: WorklplaceAddEmployeeComponent;
  let fixture: ComponentFixture<WorklplaceAddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorklplaceAddEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklplaceAddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
