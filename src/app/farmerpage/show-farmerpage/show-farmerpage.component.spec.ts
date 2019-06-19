import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFarmerpageComponent } from './show-farmerpage.component';

describe('ShowFarmerpageComponent', () => {
  let component: ShowFarmerpageComponent;
  let fixture: ComponentFixture<ShowFarmerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFarmerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFarmerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
