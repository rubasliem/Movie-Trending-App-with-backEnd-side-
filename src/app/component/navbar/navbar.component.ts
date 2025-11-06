import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements  OnInit {

  constructor(private _AuthService:AuthService) {}  

  isLogin: boolean =false;


  logOutNow(){  
     this._AuthService.logOut(); 
     }


  ngOnInit(): void {
      this._AuthService.userData.subscribe({
        next: () => {
          if(this._AuthService.userData.getValue() != null){
            this.isLogin = true;
          } else {
            this.isLogin = false;
          }   
        },
        complete: () => {
          console.log('User data subscription completed');
        },
      })
        
    }   
    
}
