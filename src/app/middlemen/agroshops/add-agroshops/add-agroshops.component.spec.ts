import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgroshopsComponent } from './add-agroshops.component';

describe('AddAgroshopsComponent', () => {
  let component: AddAgroshopsComponent;
  let fixture: ComponentFixture<AddAgroshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAgroshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgroshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
