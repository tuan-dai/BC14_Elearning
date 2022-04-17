import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss'],
})
export class UserManagerComponent implements OnInit {
  @ViewChild('keyword') domFieldSearch: any;

  listUser: any;
  totalLength: any;
  page: number = 1;

  success: boolean = false;
  error: boolean = false;
  errMess: string = '';
  keyword: any;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getListUser();
  }

  //List User
  getListUser() {
    this.data.get(environment.getListUser).subscribe((result) => {
      this.listUser = result;
      this.totalLength = result.length;
    });
  }
  //Search User

  searchUser(keyword: any) {
    this.keyword = this.domFieldSearch.nativeElement.value;
    console.log(this.keyword);
    this.data
      .get(
        `api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${this.keyword}`
      )
      .subscribe((result) => (this.listUser = result));
  }

  clearSearch() {
    this.domFieldSearch.nativeElement.value = '';
    this.ngOnInit();
  }

  //Delete User
  deleteUser(user: any) {
    let confirm: boolean = window.confirm(
      'Bạn có chắc muốn xóa tài khoản này?'
    );
    if (confirm) {
      this.data
        .delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`)
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
