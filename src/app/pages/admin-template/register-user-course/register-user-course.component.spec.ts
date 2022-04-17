import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserCourseComponent } from './register-user-course.component';

describe('RegisterUserCourseComponent', () => {
  let component: RegisterUserCourseComponent;
  let fixture: ComponentFixture<RegisterUserCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
