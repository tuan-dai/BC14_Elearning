import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCourseUserComponent } from './register-course-user.component';

const routes: Routes = [{ path: '', component: RegisterCourseUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterCourseUserRoutingModule {}
