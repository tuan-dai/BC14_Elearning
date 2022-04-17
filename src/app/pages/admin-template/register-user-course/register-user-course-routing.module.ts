import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserCourseComponent } from './register-user-course.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterUserCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterUserCourseRoutingModule {}
