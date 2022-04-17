import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {

  listCourse: any;

  error: any;



  constructor(
    private shareCourseService: ShareCourseService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {


    window.scrollTo(0, 0);
    this.shareCourseService.setIsLoading = true;

    this.handleGetListCourse();
  };


  handleGetListCourse() {

    // Reset our newsletters
    this.setOurNewsletters("TÌM KHÓA HỌC CỦA BẠN", true, []);

    // Lay du lieu tu URL
    this.activatedRoute.queryParams.subscribe((result: any) => {

      const searchKey = result.value;

      // call api lấy danh sách khóa học theo từ khóa tìm kiếm
      this.getListCourseBySearchKey(searchKey);
    });


  }

  getListCourseBySearchKey(searchKey: string) {
    this.dataService.get(`${environment.getListCourseSearch}tenKhoaHoc=${searchKey}&MaNhom=${environment.GP_ID}`)
      .subscribe({
        next: (data) => {
          this.shareCourseService.setIsLoading = false;

          this.error = null;

          const title = `Đã tìm thấy ${data.length} khóa học với từ khóa ${searchKey}`;

          this.setOurNewsletters(title, true, []);

          this.listCourse = data;

        },
        error: () => {
          const title = "TÌM KHÓA HỌC CỦA BẠN";
          this.setOurNewsletters(title, true, []);
          this.error = {
            error: `${searchKey}`
          };
          this.shareCourseService.setIsLoading = false;
        }
      });
  }


  setOurNewsletters(title: string, isSearch: boolean, breadcrumb: Array<any>) {
    this.shareCourseService.setOurNewsletters =
      {
        title,
        isSearch,
        breadcrumb
      } as OurNewsletters;
  }

}
