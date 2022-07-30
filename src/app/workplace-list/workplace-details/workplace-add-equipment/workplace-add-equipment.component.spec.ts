import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceAddEquipmentComponent } from './workplace-add-equipment.component';

describe('WorkplaceAddEquipmentComponent', () => {
  let component: WorkplaceAddEquipmentComponent;
  let fixture: ComponentFixture<WorkplaceAddEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaceAddEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceAddEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
