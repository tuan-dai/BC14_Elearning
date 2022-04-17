import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-category-course',
  templateUrl: './category-course.component.html',
  styleUrls: ['./category-course.component.scss'],
})
export class CategoryCourseComponent implements OnInit {

  listCourse: any;
  ourNewsletters: any;
  infoPagination: any;

  constructor(
    // Lay param
    private activatedRoute: ActivatedRoute,

    // Call api
    private dataService: DataService,

    // share course
    private shareCourseService: ShareCourseService
  ) { }

  ngOnInit(): void {
    this.shareCourseService.setIsLoading = true;
    window.scrollTo(0, 0);
    this.getCourseCategory();
    this.changeOurNewsletters();
  }

  // change our newsletters
  changeOurNewsletters() {
    this.activatedRoute.queryParamMap.subscribe((result: any) => {

      const categoryName = result.params.tenDanhMuc;

      const breadcrumb = [
        {
          name: 'Trang chủ',
          link: '/',
          active: false,
        },
        {
          name: categoryName,
          link: '#',
          active: true,
        },
      ];
      const title = categoryName;

      this.setOurNewsletters(title, false, breadcrumb);

    });
  }

  // set our newsletters
  setOurNewsletters(title: string, isSearch: boolean, breadcrumb: Array<any>) {
    this.shareCourseService.setOurNewsletters =
      {
        title,
        isSearch,
        breadcrumb
      } as OurNewsletters;
  }

  // get course category
  getCourseCategory() {
    this.activatedRoute.params.subscribe((result: any) => {
      this.dataService
        .get(
          `${environment.getCourseByCategory}maDanhMuc=${result.maDanhMuc}&MaNhom=GP01`
        )
        .subscribe({
          next: (data) => {
            this.listCourse = data;
            const tempPagination = {
              currentPage: 1,
              item: 8,
              totalPages: this.numberToArray(Math.ceil(data.length / 8)),
              totalItems: data.length,
              itemStart: 0,
              itemEnd: 8,
            };
            this.infoPagination = { ...tempPagination };
            this.shareCourseService.setIsLoading = false;
          },
          error: (err) => {
            this.shareCourseService.setIsLoading = false;

          },
        });
    });
  }

  // number to array
  numberToArray(number: number) {
    return Array.from(Array(number).keys());
  }

  // next page
  nextPage(page: any) {

    if (page < this.infoPagination.totalPages.length) {

      const infoTemp = { ...this.infoPagination };
      infoTemp.currentPage = page + 1;
      infoTemp.itemStart = (page) * infoTemp.item;
      infoTemp.itemEnd = (page + 1) * infoTemp.item;
      this.infoPagination = { ...infoTemp };
    }
  }

  // prev page
  prevPage(page: any) {
    if (page > 1) {
      this.infoPagination.currentPage = page - 1;
      this.infoPagination.itemStart = (page - 2) * this.infoPagination.item;
      this.infoPagination.itemEnd = (page - 1) * this.infoPagination.item;
    }
  }

  // go to page
  goToPage(page: any) {
    if (page + 1 === this.infoPagination.currentPage) {
      return;
    }

    if (page + 1 > this.infoPagination.currentPage && page + 1 <= this.infoPagination.totalPages.length) {
      this.nextPage(page);

    } else {
      this.prevPage(page + 2);
    }
  }
}

