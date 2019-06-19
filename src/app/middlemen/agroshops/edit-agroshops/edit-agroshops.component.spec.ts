import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgroshopsComponent } from './edit-agroshops.component';

describe('EditAgroshopsComponent', () => {
  let component: EditAgroshopsComponent;
  let fixture: ComponentFixture<EditAgroshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAgroshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgroshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
