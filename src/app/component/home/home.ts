
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../Interfaces/movie';
import { SearchPipePipe } from '../../search-pipe.pipe';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {

    constructor(private _movieService: MovieService,private _Router:Router) {}

  trendingMovies: Movie[] = [];
  imgPath: string = 'https://image.tmdb.org/t/p/w500/';
  term:any = ''  

  ngOnInit(): void {
    this._movieService.getTrendingShow('movie').subscribe({
      next: (data) => {
        this.trendingMovies = data.results.slice(0,20);
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


goDetails(movie: any) {
  const mediaType = movie.media_type || 'movie'; // تأمين نوع الميديا في حال لم يكن موجودًا
  this._Router.navigate(['/details', movie.id, mediaType]);
}

  getStars(vote: number): number[] {
    const fullStars = Math.floor(vote / 2);
    return Array(fullStars).fill(0);
  }

  chunkMovies(array: any[], chunkSize: number): any[][] {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

}