import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../Interfaces/movie';
import { CommonModule } from '@angular/common';
import { MediaItemComponent } from '../media-item/media-item.component';
import { TV } from '../../Interfaces/tv';
@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [CommonModule, MediaItemComponent],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.scss'
})
export class TvComponent implements  OnInit {

  trendingTv: TV[] = [];

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this._movieService.getTrendingShow('tv').subscribe({
      next: (data) => {
        this.trendingTv = data.results.slice(0, 30);
        console.log(this.trendingTv);
      },
      error: (err) => {
        console.log('Error fetching trending TV:', err);
      },
      complete: () => {
        console.log('Successfully fetched trending TV');
      },
    });
  }
}
