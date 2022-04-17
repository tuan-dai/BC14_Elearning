import { Component, OnInit } from '@angular/core';
import { ShareCourseService } from '@services/share-course.service';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss']
})

export class HomeTemplateComponent implements OnInit {


  constructor(private shareCourse: ShareCourseService) { }

  ngOnInit(): void {

  }

}
