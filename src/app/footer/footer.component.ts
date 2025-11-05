import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  userName: string = '';
  constructor(private _AuthService:AuthService) {}

    ngOnInit() {
    this._AuthService.userName$.subscribe(name => {
      this.userName = name;
    });
}
}
