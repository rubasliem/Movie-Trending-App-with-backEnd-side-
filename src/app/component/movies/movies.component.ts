import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../Interfaces/movie';
import { SearchPipePipe } from '../../search-pipe.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediaItemComponent } from '../media-item/media-item.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MediaItemComponent,FormsModule, SearchPipePipe],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovies: Movie[] = [];
  term:any = '' 

  constructor(private _movieService: MovieService ) {}
  
  ngOnInit(): void {
    this._movieService.getTrendingShow('movie').subscribe({
      next: (data) => {
        this.trendingMovies = data.results.slice(0, 30);
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
