import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss'],
})
export class CourseManagementComponent implements OnInit {
  @ViewChild('keyword') domKeyword: any;
  listCourse: any;
  success: boolean = false;
  error: boolean = false;
  errMess: string = '';
  keyword: string = '';

  totalLength: any;
  page: number = 1;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getListCourse();
  }

  //Lay danh sach khoa hoc
  getListCourse() {
    this.data.get(environment.getListCourse).subscribe((result) => {
      this.listCourse = result;
      this.totalLength = result.length;
    });
  }

  //Search khoa hoc
  searchCourse(keyword: string) {
    this.keyword = this.domKeyword.nativeElement.value;
    this.data
      .get(
        `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${this.keyword}&MaNhom=GP01`
      )
      .subscribe((result) => (this.listCourse = result));
  }
  clearSearch() {
    this.domKeyword.nativeElement.value = '';
    this.ngOnInit();
  }

  //Delete Khoa Hoc
  delete(maKhoaHoc: any) {
    let confirm: boolean = window.confirm('Bạn có chắc muốn xóa khóa học này');
    if (confirm) {
      this.data
        .delete(`api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`)
        .subscribe({
          next: (result) => (this.success = true),
          error: (error) => ((this.error = true), (this.errMess = error.error)),
        });
      setTimeout(() => (this.success = false), 2000);
      setTimeout(() => (this.error = false), 2000);
      this.ngOnInit();
    }
  }
}
