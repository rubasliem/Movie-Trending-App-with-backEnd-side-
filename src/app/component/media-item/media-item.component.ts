import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-media-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './media-item.component.html',
  styleUrl: './media-item.component.scss'
})
export class MediaItemComponent {
@Input() item:any=[];

constructor( private _Router:Router ){}

  goToDetails() {
    const mediaType = this.item.media_type || 'movie';
    this._Router.navigate(['/details', this.item.id, mediaType]);

}

}