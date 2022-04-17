import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: 'course-management',
        loadChildren: () =>
          import('./course-management/course-management.module').then(
            (m) => m.CourseManagementModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'course-management',
      },
      {
        path: 'add-course',
        loadChildren: () =>
          import('./add-course/add-course.module').then(
            (m) => m.AddCourseModule
          ),
      },
      {
        path: 'edit-course/:id',
        loadChildren: () =>
          import('./edit-course/edit-course.module').then(
            (m) => m.EditCourseModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
