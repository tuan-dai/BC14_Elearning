import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-unregister',
  templateUrl: './unregister.component.html',
  styleUrls: ['./unregister.component.scss'],
})
export class UnregisterComponent implements OnInit {
  @Input() dataCourse: any;
  listUserUnregisterd: any = [];

  totalLength: any = [];
  page: number = 1;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getListUserUnregistered();
  }

  getListUserUnregistered() {
    this.data
      .post(environment.getListUserUnregisterd, this.dataCourse)
      .subscribe((result) => {
        this.listUserUnregisterd = result;
        this.totalLength = result.length;
      });
  }
}
