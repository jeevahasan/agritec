import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgroservicesComponent } from './add-agroservices.component';

describe('AddAgroservicesComponent', () => {
  let component: AddAgroservicesComponent;
  let fixture: ComponentFixture<AddAgroservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAgroservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgroservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
