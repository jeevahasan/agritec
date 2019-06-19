import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBaiComponent } from './show-bai.component';

describe('ShowBaiComponent', () => {
  let component: ShowBaiComponent;
  let fixture: ComponentFixture<ShowBaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
