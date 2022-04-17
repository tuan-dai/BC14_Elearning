import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseManagementRoutingModule } from './course-management-routing.module';
import { CourseManagementComponent } from './course-management.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DirectivesModule } from 'src/app/_core/shared/directives/directives.module';

@NgModule({
  declarations: [CourseManagementComponent],
  imports: [CommonModule, CourseManagementRoutingModule, NgxPaginationModule, DirectivesModule],
})
export class CourseManagementModule { }
