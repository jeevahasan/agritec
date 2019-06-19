import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaiComponent } from './add-bai.component';

describe('AddBaiComponent', () => {
  let component: AddBaiComponent;
  let fixture: ComponentFixture<AddBaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
