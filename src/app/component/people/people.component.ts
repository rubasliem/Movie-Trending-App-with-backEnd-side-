import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../Interfaces/movie';
import { MediaItemComponent } from '../media-item/media-item.component';
import { CommonModule } from '@angular/common';
import { People } from '../../Interfaces/people';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, MediaItemComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements  OnInit {

  trendingPeople: People[] = [];

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this._movieService.getTrendingShow('person').subscribe({
      next: (data) => {
        console.log(data);
        this.trendingPeople = data.results.slice(0, 16);
        console.log('Trending People:',this.trendingPeople);
      },
      error: (err) => {
        console.log('Error fetching trending People:', err);
      },
      complete: () => {
        console.log('Successfully fetched trending People');
      },
    });
  }
}
