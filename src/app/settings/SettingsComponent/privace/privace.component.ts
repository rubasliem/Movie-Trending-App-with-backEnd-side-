import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privace',
  standalone: true,
  imports: [],
  templateUrl: './privace.component.html',
  styleUrl: './privace.component.scss'
})
export class PrivaceComponent {

  constructor(private _Router:Router){}
  
  lastUpdated = 'November 7, 2025';

    home(){
    this._Router.navigate(['/'])
  }

}
