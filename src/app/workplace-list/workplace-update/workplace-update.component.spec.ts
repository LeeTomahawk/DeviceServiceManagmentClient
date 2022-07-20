import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceUpdateComponent } from './workplace-update.component';

describe('WorkplaceUpdateComponent', () => {
  let component: WorkplaceUpdateComponent;
  let fixture: ComponentFixture<WorkplaceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaceUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
