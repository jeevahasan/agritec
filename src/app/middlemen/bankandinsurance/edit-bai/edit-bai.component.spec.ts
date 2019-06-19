import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBaiComponent } from './edit-bai.component';

describe('EditBaiComponent', () => {
  let component: EditBaiComponent;
  let fixture: ComponentFixture<EditBaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
