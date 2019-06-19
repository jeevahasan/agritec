import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscussComponent } from './add-discuss.component';

describe('AddDiscussComponent', () => {
  let component: AddDiscussComponent;
  let fixture: ComponentFixture<AddDiscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
