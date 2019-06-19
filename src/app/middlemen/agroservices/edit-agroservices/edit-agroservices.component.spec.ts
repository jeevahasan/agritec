import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgroservicesComponent } from './edit-agroservices.component';

describe('EditAgroservicesComponent', () => {
  let component: EditAgroservicesComponent;
  let fixture: ComponentFixture<EditAgroservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAgroservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgroservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
