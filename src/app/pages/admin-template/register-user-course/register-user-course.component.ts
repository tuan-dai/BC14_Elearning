import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-user-course',
  templateUrl: './register-user-course.component.html',
  styleUrls: ['./register-user-course.component.scss'],
})
export class RegisterUserCourseComponent implements OnInit {
  dataCourse: any = { maKhoaHoc: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
  }

  getParamsFromUrl() {
    this.dataCourse.maKhoaHoc = this.route.snapshot.paramMap.get('id');
  }
}
