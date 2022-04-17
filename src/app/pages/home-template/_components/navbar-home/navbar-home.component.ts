import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss'],
})
export class NavbarHomeComponent implements OnInit {
  courseCategory: any;
  isLogin: boolean = true;
  error: any;
  userLogin: any;
  // @ViewChild
  constructor(
    private dataService: DataService,
    private shareCourseServices: ShareCourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shareCourseServices.getUserLogin.subscribe((result) => {
      this.userLogin = result;
      if (this.userLogin) {
        this.isLogin = true;
      }
    });
    this.getCourseCategory();
  }

  getCourseCategory() {
    this.dataService.get(environment.getCourseCategory).subscribe({
      next: (data) => {
        // set dữ liêu vào shareCourseService
        this.shareCourseServices.setCourseCategory = data;
        // get dữ liệu từ shareCourseService
        this.shareCourseServices.getCourseCategory.subscribe((data) => {
          this.courseCategory = data;
        });
      },
    });
  }

  handleLogout() {
    Swal.fire({
      title: 'Bạn có muốn đăng xuất không?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Có',
      cancelButtonText: "Không"
    }).then((result) => {
      if (result.isConfirmed) {
        this.shareCourseServices.setUserLogin = null;
        if (this.router.url === "/profile") {
          this.router.navigateByUrl("/");
        }
      }
    });

  }

  onClickLogin() {
    this.isLogin = true;
  }
  onClickRegister() {
    this.isLogin = false;

  }
}
