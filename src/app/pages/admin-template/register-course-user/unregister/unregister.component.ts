import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-unregister',
  templateUrl: './unregister.component.html',
  styleUrls: ['./unregister.component.scss'],
})
export class UnregisterComponent implements OnInit {
  @Input() dataUser: any;
  listCourseUnregisterd: any = [];

  totalLength: any;
  page: number = 1;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getListCourseUnregisterd();
  }

  getListCourseUnregisterd() {
    this.data
      .post(environment.getListCourseUnregisterd, this.dataUser)
      .subscribe((res) => (this.listCourseUnregisterd = res));
  }
}
