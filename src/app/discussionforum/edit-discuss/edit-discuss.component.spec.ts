import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiscussComponent } from './edit-discuss.component';

describe('EditDiscussComponent', () => {
  let component: EditDiscussComponent;
  let fixture: ComponentFixture<EditDiscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
