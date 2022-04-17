import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {

  @Input() category: any;

  listCourse: any;

  constructor(private dataService: DataService, private router: Router, private shareCourseService: ShareCourseService) { }


  ngOnInit(): void {
    window.scrollTo(0, 0);


    this.getListCourse(this.category.maDanhMuc);
  }


  getListCourse(maDanhMuc: any) {
    this.dataService.get(`${environment.getCourseByCategory}maDanhMuc=${maDanhMuc}&MaNhom=${environment.GP_ID}`).subscribe((data) => {
      this.listCourse = data;
      if (this.category.maDanhMuc === "TuDuy") {
        this.shareCourseService.setIsLoading = false;
      }
    });

  }


}
