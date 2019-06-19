import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBaiComponent } from './dash-bai.component';

describe('DashBaiComponent', () => {
  let component: DashBaiComponent;
  let fixture: ComponentFixture<DashBaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
