import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCourseComponent } from './card-course/card-course.component';
import { DirectivesModule } from 'src/app/_core/shared/directives/directives.module';
import { PipeModule } from 'src/app/_core/shared/pipe/pipe.module';
import { FormsModule } from '@angular/forms';
import { OurNewslettersComponent } from './our-newsletters/our-newsletters.component';
import { MaterialModule } from 'src/app/_core/shared/material/material.module';


import { RouterModule } from '@angular/router';
import { ModalComponent } from './navbar-home/modal/modal.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [CardCourseComponent, OurNewslettersComponent, ModalComponent, LoadingComponent,],
  imports: [
    CommonModule,
    DirectivesModule,
    PipeModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ], exports: [
    CardCourseComponent,
    OurNewslettersComponent,
    ModalComponent,
    LoadingComponent

  ]
})
export class HomeComponentModule { }
