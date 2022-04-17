import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCourseUserComponent } from './register-course-user.component';

describe('RegisterCourseUserComponent', () => {
  let component: RegisterCourseUserComponent;
  let fixture: ComponentFixture<RegisterCourseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCourseUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCourseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
