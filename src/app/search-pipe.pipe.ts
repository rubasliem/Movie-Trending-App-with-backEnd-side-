import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  standalone: true
})
export class SearchPipePipe implements PipeTransform {
  transform(movies: any[], term: string): any[] {
  if (!term) return movies; // لو مفيش بحث رجّع الكل
  return movies.filter(movie =>
    movie.title?.toLowerCase().includes(term.toLowerCase())
  );
}

}
