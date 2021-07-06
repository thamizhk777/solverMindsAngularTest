import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPendingComponent } from './brand-pending.component';

describe('BrandPendingComponent', () => {
  let component: BrandPendingComponent;
  let fixture: ComponentFixture<BrandPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
