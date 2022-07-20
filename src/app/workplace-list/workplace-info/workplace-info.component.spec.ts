import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceInfoComponent } from './workplace-info.component';

describe('WorkplaceInfoComponent', () => {
  let component: WorkplaceInfoComponent;
  let fixture: ComponentFixture<WorkplaceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
