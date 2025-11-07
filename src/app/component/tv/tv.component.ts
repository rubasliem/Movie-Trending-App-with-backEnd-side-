import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../Interfaces/movie';
import { CommonModule } from '@angular/common';
import { MediaItemComponent } from '../media-item/media-item.component';
import { TV } from '../../Interfaces/tv';
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from '../../search-pipe.pipe';
@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [CommonModule, MediaItemComponent ,FormsModule,SearchPipePipe],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.scss'
})
export class TvComponent implements  OnInit {

  trendingTv: TV[] = [];
  term:any = ''

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this._movieService.getTrendingShow('tv').subscribe({
      next: (data) => {
        this.trendingTv = data.results.slice(0, 20);
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
