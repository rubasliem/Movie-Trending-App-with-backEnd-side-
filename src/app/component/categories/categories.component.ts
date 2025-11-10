import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movies.service';
import { MediaItemComponent } from '../media-item/media-item.component';
import { TV } from '../../Interfaces/tv';
import { Genre, Movie } from '../../Interfaces/movie';
import { SearchPipePipe } from '../../search-pipe.pipe';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, MediaItemComponent, SearchPipePipe, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

    // 🔹 التصنيفات الرئيسية
  categories: string[] = ['Movies', 'TV'];
  selectedCategory: string = 'Movies';
  selectedSubCategory: any = null;

  // 🔹 التصنيفات الفرعية
  movieGenres: any[] = [];
  tvGenres: any[] = [];

  // 🔹 نتائج العرض
  filteredItems: any[] = [];
  term: string = '';

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this.loadGenres();
  }

  // 🔹 جلب التصنيفات من الـ API
  loadGenres() {
    this._movieService.getMovieGenres().subscribe({
      next: (res: any) => {
        this.movieGenres = res.genres;
      },
      error: (err) => console.log('Error fetching movie genres:', err),
    });

    this._movieService.getTvGenres().subscribe({
      next: (res: any) => {
        this.tvGenres = res.genres;
      },
      error: (err) => console.log('Error fetching tv genres:', err),
    });
  }

  // 🔹 عند اختيار تصنيف رئيسي
  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.selectedSubCategory = null;
    this.filteredItems = [];
  }

  // 🔹 عند اختيار تصنيف فرعي
  selectSubCategory(genre: any) {
    this.selectedSubCategory = genre;

    if (this.selectedCategory === 'Movies') {
      this._movieService.getMoviesByGenre(genre.id).subscribe({
        next: (res: any) => (this.filteredItems = res.results),
        error: (err) => console.log('Error fetching movies by genre:', err),
      });
    } else if (this.selectedCategory === 'TV') {
      this._movieService.getTvByGenre(genre.id).subscribe({
        next: (res: any) => (this.filteredItems = res.results),
        error: (err) => console.log('Error fetching tv shows by genre:', err),
      });
    }
  }

}