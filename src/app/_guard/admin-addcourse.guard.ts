import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddCourseComponent } from '../pages/admin-template/courses/add-course/add-course.component';

@Injectable({
  providedIn: 'root',
})
export class AdminAddcourseGuard implements CanDeactivate<AddCourseComponent> {
  canDeactivate(component: AddCourseComponent) {
    return (
      component.canDiactivateAddCourse() ||
      window.confirm('Bạn có chắc muốn rời khỏi trang này?')
    );
  }
}
