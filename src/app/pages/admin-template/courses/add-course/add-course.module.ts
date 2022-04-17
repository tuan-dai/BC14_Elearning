import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AddCourseRoutingModule } from './add-course-routing.module';
import { AddCourseComponent } from './add-course.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/_core/material/material.module';

@NgModule({
  declarations: [AddCourseComponent],

  imports: [CommonModule, AddCourseRoutingModule, FormsModule, MaterialModule],
})
export class AddCourseModule {}
