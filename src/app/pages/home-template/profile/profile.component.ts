import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  error: any;
  userEdit = {
    chiTietKhoaHocGhiDanh: [],
    taiKhoan: 'dovanthao',
    matKhau: 'dovanthao',
    hoTen: 'thao',
    soDT: '0932323233',
    maLoaiNguoiDung: 'HV',
    maNhom: 'GP01',
    email: 'dfladsl@gmail.com',
  };

  constructor(
    private shareCourseService: ShareCourseService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService
      .post(`${environment.infoUserHome}`, null)
      .subscribe({
        next: (data: any) => {
          this.userEdit = data;

        },
        error: (error: any) => {
          console.log(error);
        },
      });

    const breadcrumb = [
      {
        name: 'Trang chủ',
        link: '/',
        active: false,
      },
      {
        name: 'Profile',
        link: '#',
        active: true,
      },
    ];
    const title = 'Profile';

    this.setOurNewsletters(title, false, breadcrumb);
  }

  setOurNewsletters(title: string, isSearch: boolean, breadcrumb: Array<any>) {
    this.shareCourseService.setOurNewsletters = {
      title,
      isSearch,
      breadcrumb,
    } as OurNewsletters;
  }
  onSubmit(value: any) {

    value.maLoaiNguoiDung = this.userEdit.maLoaiNguoiDung;
    value.taiKhoan = this.userEdit.taiKhoan;
    value.maNhom = this.userEdit.maNhom;
    this.dataService.put(`${environment.cancelRegister}`, value).subscribe({
      next: (data) => {

        if (data) {
          Swal.fire({
            title: 'Bạn đã cập nhật thành công!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            data.accessToken = this.shareCourseService.getUserLogin.value.accessToken;
            this.shareCourseService.setUserLogin = data;
            this.router.navigateByUrl("/");
          });
        }

      },
      error: (error) => {

        this.error = error;
      }
    });
  }
}
