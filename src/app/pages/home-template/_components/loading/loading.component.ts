import { Component, OnInit } from '@angular/core';
import { ShareCourseService } from '@services/share-course.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading = false;

  constructor(private shareCourseService: ShareCourseService) { }

  ngOnInit(): void {

    this.shareCourseService.getIsLoading.subscribe((result) => {
      this.isLoading = result;
    });
  }

}
