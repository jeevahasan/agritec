import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInforComponent } from './edit-infor.component';

describe('EditInforComponent', () => {
  let component: EditInforComponent;
  let fixture: ComponentFixture<EditInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
