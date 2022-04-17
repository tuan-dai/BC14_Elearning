import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss'],
})
export class RegisteredComponent implements OnInit {
  @Input() dataUser: any;
  listCourseRegisterd: any;

  totalLength: any = [];
  page: number = 1;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getListCourseRegisterd();
  }

  getListCourseRegisterd() {
    this.data
      .post(environment.getListCourseRegisterd, this.dataUser)
      .subscribe((res) => {
        this.listCourseRegisterd = res;
        this.totalLength = res.length;
      });
  }
}
