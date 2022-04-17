import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss'],
})
export class RegisteredComponent implements OnInit {
  @Input() dataCourse: any;
  listUserRegisterd: any = [];

  totalLength: any = [];
  page: number = 1;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getListUserRegistered();
  }

  getListUserRegistered() {
    this.data
      .post(environment.getListUserRegisterd, this.dataCourse)
      .subscribe((result) => {
        this.listUserRegisterd = result;
        this.totalLength = result.length;
      });
  }
}
