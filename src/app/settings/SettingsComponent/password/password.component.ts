import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {

    constructor(private _Router:Router){}

    pageTitle = 'Accessibility Statement';
    lastUpdated = 'November 7, 2025';

      home(){
      this._Router.navigate(['/'])
    }

}
