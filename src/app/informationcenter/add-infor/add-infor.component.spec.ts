import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInforComponent } from './add-infor.component';

describe('AddInforComponent', () => {
  let component: AddInforComponent;
  let fixture: ComponentFixture<AddInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
