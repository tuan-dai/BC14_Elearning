import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  id: any;
  userInfo: any;
  success: boolean = false;
  error: boolean = false;
  errMess: string = '';

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
  }

  getParamsFromUrl() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data
      .get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01`)
      .subscribe(
        (result) =>
          (this.userInfo = result.find(
            (user: any) => user.taiKhoan === this.id
          ))
      );
  }

  editUser(user: any) {
    user.maLoaiNguoiDung = this.userInfo.maLoaiNguoiDung;
    user.maNhom = 'GP01';
    this.data.put(environment.editUser, user).subscribe({
      next: (result) => {
        this.success = true;
        setTimeout(() => this.router.navigate(['/admin/users']), 2000);
      },
      error: (error) => {
        this.error = true;
        this.errMess = error.error;
        setTimeout(() => (this.error = false), 2000);
      },
    });
  }
}
