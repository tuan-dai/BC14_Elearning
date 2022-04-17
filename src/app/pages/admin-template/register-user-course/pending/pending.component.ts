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
  @Input() dataCourse: any;
  listUserPending: any = [];
  success: boolean = false;
  error: boolean = false;

  totalLength: any = [];
  page: number = 1;
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getListUserPending();
  }

  getListUserPending() {
    this.data
      .post(environment.getListUserPending, this.dataCourse)
      .subscribe((result) => {
        this.listUserPending = result;
        this.totalLength = result.length;
      });
  }

  //Ghi danh
  registerCourse(user: any) {
    this.dataCourse.taiKhoan = user.taiKhoan;
    this.data
      .post(environment.registerCourse, this.dataCourse)
      .subscribe((result) => console.log(result));

    this.success = true;
    setTimeout(() => this.router.navigate(['/admin/courses']), 2000);
  }

  //Huy ghi danh
  cancelRegister(user: any) {
    this.dataCourse.taiKhoan = user.taiKhoan;
    this.data
      .post(environment.cancelRegister, this.dataCourse)
      .subscribe((result) => console.log(result));

    this.error = true;
    setTimeout(() => this.router.navigate(['/admin/courses']), 2000);
  }
}
