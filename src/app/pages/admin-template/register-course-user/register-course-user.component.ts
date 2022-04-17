import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-course-user',
  templateUrl: './register-course-user.component.html',
  styleUrls: ['./register-course-user.component.scss'],
})
export class RegisterCourseUserComponent implements OnInit {
  dataUser: any = { TaiKhoan: '' };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
  }

  getParamsFromUrl() {
    this.dataUser.TaiKhoan = this.route.snapshot.paramMap.get('id');
  }
}
