import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements OnInit {
  @Input() dataUser: any;
  course: any = { maKhoaHoc: '', taiKhoan: '' };
  listCoursePending: any = [];

  success: boolean = false;
  error: boolean = false;

  totalLength: any = [];
  page: number = 1;
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getListCoursePending();
  }

  getListCoursePending() {
    this.data
      .post(environment.getListCoursePending, this.dataUser)
      .subscribe((res) => {
        this.listCoursePending = res;
        this.totalLength = res.length;
      });
  }

  //Ghi danh
  registerUser(course: any) {
    this.course.maKhoaHoc = course.maKhoaHoc;
    this.course.taiKhoan = this.dataUser.TaiKhoan;

    this.data
      .post(environment.registerCourse, this.course)
      .subscribe((result) => console.log(result));

    this.success = true;
    setTimeout(() => this.router.navigate(['/admin/users']), 2000);
  }

  //Huy ghi danh
  cancelRegister(course: any) {
    this.course.maKhoaHoc = course.maKhoaHoc;
    this.course.taiKhoan = this.dataUser.TaiKhoan;

    this.data
      .post(environment.cancelRegister, this.dataUser)
      .subscribe((result) => console.log(result));
    this.error = true;
    setTimeout(() => this.router.navigate(['/admin/users']), 2000);
  }
}
