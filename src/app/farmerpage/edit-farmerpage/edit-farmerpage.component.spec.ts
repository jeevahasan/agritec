import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFarmerpageComponent } from './edit-farmerpage.component';

describe('EditFarmerpageComponent', () => {
  let component: EditFarmerpageComponent;
  let fixture: ComponentFixture<EditFarmerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFarmerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFarmerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
