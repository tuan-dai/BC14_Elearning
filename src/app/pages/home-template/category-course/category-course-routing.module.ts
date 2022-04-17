import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCourseComponent } from './category-course.component';

const routes: Routes = [{ path: '', component: CategoryCourseComponent }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryCourseRoutingModule {}
