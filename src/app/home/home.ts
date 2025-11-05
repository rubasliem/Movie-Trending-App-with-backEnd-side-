
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movies.service';
import { Movie } from '../models/movie';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {

  constructor(
    private _movieService: MovieService,
  ) {
    this._movieService.getTrendingMovies().subscribe({
      next: (data) => {
        this.trendingMovies = data.results;
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

  trendingMovies: Movie[] = [];
  imgPath: string = 'https://image.tmdb.org/t/p/w500/';

  getStars(vote: number): number[] {
    const fullStars = Math.floor(vote / 2);
    return Array(fullStars).fill(0);
  }
}