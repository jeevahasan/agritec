import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroservicesComponent } from './agroservices.component';

describe('AgroservicesComponent', () => {
  let component: AgroservicesComponent;
  let fixture: ComponentFixture<AgroservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
