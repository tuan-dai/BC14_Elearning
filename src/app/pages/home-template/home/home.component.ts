import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courseCategory: any;

  constructor(
    private shareCourseService: ShareCourseService
  ) { }

  ngOnInit(): void {
    this.shareCourseService.setIsLoading = true;
    this.shareCourseService.setOurNewsletters = {
      title: "TÌM KHÓA HỌC CỦA BẠN",
      isSearch: true,
      breadcrumb: []
    } as OurNewsletters;

    this.shareCourseService.getCourseCategory.subscribe((data) => {
      this.courseCategory = data;
    });
  }



}
