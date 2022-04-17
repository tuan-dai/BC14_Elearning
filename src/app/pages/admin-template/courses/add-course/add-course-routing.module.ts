import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddcourseGuard } from 'src/app/_guard/admin-addcourse.guard';
import { AddCourseComponent } from './add-course.component';

const routes: Routes = [
  {
    path: '',
    component: AddCourseComponent,
    canDeactivate: [AdminAddcourseGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCourseRoutingModule {}
