import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryCourseRoutingModule } from './category-course-routing.module';
import { CategoryCourseComponent } from './category-course.component';
import { HomeComponentModule } from '../_components/home-component.module';


@NgModule({
  declarations: [
    CategoryCourseComponent
  ],
  imports: [
    CommonModule,
    CategoryCourseRoutingModule,
    HomeComponentModule
  ]
})
export class CategoryCourseModule { }
