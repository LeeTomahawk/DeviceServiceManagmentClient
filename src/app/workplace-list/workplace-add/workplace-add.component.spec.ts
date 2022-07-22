import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceAddComponent } from './workplace-add.component';

describe('WorkplaceAddComponent', () => {
  let component: WorkplaceAddComponent;
  let fixture: ComponentFixture<WorkplaceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
