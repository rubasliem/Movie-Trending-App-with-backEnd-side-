
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../Interfaces/movie';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {

    constructor(private _movieService: MovieService) {}

  getTrendingMovies:any[] = [];
  getTrendingTv:any[] = [];
  getTrendingPeople:any[] = [];

  ngOnInit(): void {
    this._movieService.getTrendingShow('movie').subscribe({
      next: (data) => {
        this.trendingMovies = data.results.slice(0,12);
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