import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInforComponent } from './show-infor.component';

describe('ShowInforComponent', () => {
  let component: ShowInforComponent;
  let fixture: ComponentFixture<ShowInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
