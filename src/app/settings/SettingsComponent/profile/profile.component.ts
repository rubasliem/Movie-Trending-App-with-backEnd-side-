import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private _Router:Router){}

   user = {
    avatar: 'assets/images/Person-icon.jpg',
    name: 'John Doe',
    username: '@johndoe',
    age : 30,
    email: 'johndoe@example.com',
    bio: 'Movie enthusiast and TV series lover. Always seeking the next big story.',
    joined: 'Joined January 2024'
  };

  home(){
    this._Router.navigate(['/'])
  }

}
