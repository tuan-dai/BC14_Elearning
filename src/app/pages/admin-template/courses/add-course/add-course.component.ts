import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  @ViewChild('addCourseForm') domAddCourse: any;

  success: boolean = false;
  error: boolean = false;
  errMess: string = '';

  courseCatagory: any;
  listUser: any = [];
  files: any = {};

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getCourseCatagory();
    this.getListUser();
  }

  //Lay danh muc khoa hoc
  getCourseCatagory() {
    this.data
      .get(environment.getCourseCatagory)
      .subscribe((result) => (this.courseCatagory = result));
  }

  //Lay danh sach nguoi dung co ma la GV
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

  File(e: any) {
    this.files = e.target.files[0];
  }

  //Them khoa hoc
  addCourse(course: any) {
    course.ngayTao = moment(course.ngayTao).format('DD/MM/YYYY');

    let frm = new FormData();
    for (let key in course) {
      key !== 'hinhAnh'
        ? frm.append(key, course[key])
        : frm.append('hinhAnh', this.files);
    }
    this.data.post(environment.addCourseUploadImage, frm).subscribe({
      next: () => (
        (this.success = true),
        this.domAddCourse.reset({}),
        setTimeout(() => this.router.navigate(['/admin/courses']), 2000)
      ),
      error: (error) => ((this.error = true), (this.errMess = error.error)),
    });
  }

  //Candiactivate Form
  @HostListener('window:beforeunload', ['$event'])
  canDiactivateAddCourse() {
    return !this.domAddCourse.dirty;
  }
}
