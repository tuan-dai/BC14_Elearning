import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @ViewChild('addUserForm') domAddUserForm: any;

  success: boolean = false;
  error: boolean = false;
  errMess: string = '';
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {}

  addUser(user: any) {
    (user.maNhom = 'GP01'), (user.maLoaiNguoiDung = 'HV');
    console.log(user);
    this.data.post(environment.addUser, user).subscribe({
      next: (result) => {
        this.success = true;
        this.domAddUserForm.reset({});
        setTimeout(() => this.router.navigate(['/admin/users']), 2000);
      },
      error: (error) => {
        this.error = true;
        this.errMess = error.error;
        setTimeout(() => (this.error = false), 2000);
      },
    });
  }

  //Candiactivate Form
  @HostListener('window:beforeunload', ['$event'])
  canDiactivateAddUser() {
    return !this.domAddUserForm.dirty;
  }
}
