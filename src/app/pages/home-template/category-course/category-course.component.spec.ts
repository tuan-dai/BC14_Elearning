import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCourseComponent } from './category-course.component';

describe('CategoryCourseComponent', () => {
  let component: CategoryCourseComponent;
  let fixture: ComponentFixture<CategoryCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
