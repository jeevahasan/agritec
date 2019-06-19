import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDiscussComponent } from './show-discuss.component';

describe('ShowDiscussComponent', () => {
  let component: ShowDiscussComponent;
  let fixture: ComponentFixture<ShowDiscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDiscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
