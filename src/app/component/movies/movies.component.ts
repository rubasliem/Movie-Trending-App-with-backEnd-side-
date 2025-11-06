import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../Interfaces/movie';
import { MediaItemComponent } from '../media-item/media-item.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MediaItemComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {

  trendingMovies: Movie[] = [];

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this._movieService.getTrendingShow('movie').subscribe({
      next: (data) => {
        this.trendingMovies = data.results.slice(0, 20);
        console.log(this.trendingMovies);
      },
      error: (err) => {
        console.log('Error fetching trending movies:', err);
      },
      complete: () => {
        console.log('Successfully fetched trending movies');
      },
    });
  }
}
