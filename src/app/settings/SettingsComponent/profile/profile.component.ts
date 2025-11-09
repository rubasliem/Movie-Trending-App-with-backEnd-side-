import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../Interfaces/user';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private _AuthService: AuthService , private _Router:Router){}

  
  user: User | null = null;
 ngOnInit(): void {
    // نحصل على البيانات المفكوكة من التوكن
    this._AuthService.userData.subscribe({
      next: (data: User | null) => {
        if (data) {
          this.user = data;

        } else {
          // لو مافيش بيانات يرجع المستخدم لتسجيل الدخول
          this._Router.navigate(['/login']);
        }
      }
    });
  }

  home(){
    this._Router.navigate(['/'])
  }

}
