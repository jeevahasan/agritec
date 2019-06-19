import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmerpageComponent } from './add-farmerpage.component';

describe('AddFarmerpageComponent', () => {
  let component: AddFarmerpageComponent;
  let fixture: ComponentFixture<AddFarmerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFarmerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFarmerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
