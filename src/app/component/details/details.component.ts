import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { MediaItemComponent } from "../media-item/media-item.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MediaItemComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  item: any = '';
  similar: any[] = [];
  mediaType: string = '';

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MovieService: MovieService,
    private _Location:Location ) {}

  getStars(vote: number): number[] {
    const fullStars = Math.min(Math.floor(vote / 2), 5);
    return Array(fullStars).fill(0);
  }

  ngOnInit(): void {
    const { id, media_type } = this._ActivatedRoute.snapshot.params;
    console.log('id:', id);
    console.log('media_type:', media_type);

    this.mediaType = media_type;
    this.loadDetails(id, media_type);
  }

  // دالة رئيسية لتحميل التفاصيل + المشابهين
  loadDetails(id: string, media_type: string) {
    this._MovieService.getItemDetails(id, media_type).subscribe({
      next: (data) => {
        this.item = data;
        this.getSimilar(id, media_type);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // عند تحميل فيلم جديد
      }
    });
  }

  //  لجلب العناصر المشابهة فقط
  getSimilar(id: string, media_type: string) {
    this._MovieService.getSimilar(id, media_type).subscribe({
      next: (data) => {
        this.similar = data.results.slice(0, 15);
      },
      error: (err) => console.error('Error fetching similar:', err)
    });
  }


  back(){
     this._Location.back();

  }
}
