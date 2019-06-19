import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationcenterComponent } from './informationcenter.component';

describe('InformationcenterComponent', () => {
  let component: InformationcenterComponent;
  let fixture: ComponentFixture<InformationcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
