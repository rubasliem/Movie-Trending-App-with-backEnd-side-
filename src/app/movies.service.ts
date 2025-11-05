import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly apiKey = '89ff14c291cd262728fa498371ef8913';
  private readonly baseUrl = 'https://api.themoviedb.org/3'; 


  constructor(private _httpClient: HttpClient) {}

  getTrendingMovies(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`);
  }

}