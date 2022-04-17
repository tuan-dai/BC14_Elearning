import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  course: any;
  listCourse: any;

  error = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private shareCourseService: ShareCourseService,
  ) { }

  ngOnInit(): void {
    this.shareCourseService.setIsLoading = true;
    window.scrollTo(0, 0);

    this.getCourse();
  }


  getCourse() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.dataService.get(`${environment.getInfoCourse}${params.id}`)
        .subscribe(
          {
            next: (data) => {
              this.course = data;
              this.getListCourse();
            },
            error: (err) => {
              this.error = err;
              this.shareCourseService.setIsLoading = false;

            }
          }
        );
    });
  }

  getListCourse() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.setOurNewsletters(params);
      this.dataService.get(`${environment.getCourseByCategory}maDanhMuc=${params.maDanhMucKhoaHoc}&MaNhom=${environment.GP_ID}`).subscribe((data) => {
        this.shareCourseService.setIsLoading = false;

        this.listCourse = data.filter((course: any) => course.maKhoaHoc !== this.course.maKhoaHoc).slice(0, 4);

      });

    });
  }

  setOurNewsletters(params: any) {
    this.shareCourseService.setOurNewsletters = {
      title: params.tenDanhMucKhoaHoc,
      isSearch: false,
      breadcrumb: [
        {
          name: 'Trang chủ',
          link: '/',
          active: false
        },
        {
          name: params.tenDanhMucKhoaHoc,
          link: `/category/${params.maDanhMucKhoaHoc}`,
          queryParams: {
            tenDanhMuc: params.tenDanhMucKhoaHoc
          },
          active: false
        },
        {
          name: this.course?.tenKhoaHoc,
          link: '#',
          active: true
        }
      ]
    } as OurNewsletters;
  }



}


