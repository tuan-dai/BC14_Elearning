import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  success: boolean = false;
  error: boolean = false;
  errMess: string = '';

  id: any;
  files: any = [];
  courseCatagory: any;
  courseInfo: any;
  listUser: any = [];

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getCourseCatagory();
    this.getListUser();
  }

  getParamsFromUrl() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data
      .get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${this.id}`)
      .subscribe((result) => (this.courseInfo = result));
  }

  //Lay danh muc khoa hoc
  getCourseCatagory() {
    this.data
      .get(environment.getCourseCatagory)
      .subscribe((result) => (this.courseCatagory = result));
  }

  //Lay danh sach nguoi dung
  getListUser() {
    this.data
      .get(environment.getListUser)
      .subscribe(
        (result) =>
          (this.listUser = result.filter(
            (user: any) => user.maLoaiNguoiDung === 'GV'
          ))
      );
  }

  nameFile(e: any) {
    this.files = e.target.files[0];
    console.log(this.files);
  }

  editCourse(course: any) {
    console.log(course);

    let frm = new FormData();
    for (let key in course) {
      if (key !== 'hinhAnh') {
        frm.append(key, course[key]);
      } else {
        frm.append('hinhAnh', this.files);
      }
    }

    this.data.post(environment.editCourseUploadImage, frm).subscribe({
      next: (result) => (
        (this.success = true),
        setTimeout(() => this.router.navigate(['/admin/courses']), 2000)
      ),
      error: (error) => ((this.error = true), (this.errMess = error.error)),
    });
  }
}
