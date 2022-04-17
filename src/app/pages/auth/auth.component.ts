import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  error: any;
  constructor(private data: DataService, private router: Router) { }
  ngOnInit(): void { }
  login(user: any) {
    this.data.post(environment.login, user).subscribe({
      next: (result) => {
        if (result.maLoaiNguoiDung === 'GV') {
          this.error = null;
          localStorage.setItem('USER_LOGIN', JSON.stringify(result));
          this.router.navigate(['/admin']);
        } else {
          this.error = {
            error: "Tài khoản hoặc mật khẩu không đúng"
          };
        }
      }, error: (error) => {
        this.error = error;
      }
    });
  }
}
