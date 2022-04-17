import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCourseRoutingModule } from './edit-course-routing.module';
import { EditCourseComponent } from './edit-course.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/_core/material/material.module';

@NgModule({
  declarations: [EditCourseComponent],
  imports: [CommonModule, EditCourseRoutingModule, FormsModule, MaterialModule],
})
export class EditCourseModule {}
