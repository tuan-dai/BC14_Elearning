import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewslettersComponent } from './our-newsletters.component';

describe('OurNewslettersComponent', () => {
  let component: OurNewslettersComponent;
  let fixture: ComponentFixture<OurNewslettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurNewslettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
