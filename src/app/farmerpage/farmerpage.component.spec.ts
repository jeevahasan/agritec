import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerpageComponent } from './farmerpage.component';

describe('FarmerpageComponent', () => {
  let component: FarmerpageComponent;
  let fixture: ComponentFixture<FarmerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
