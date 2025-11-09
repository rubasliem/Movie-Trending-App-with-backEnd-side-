import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private readonly apiKey = '89ff14c291cd262728fa498371ef8913';
  private readonly baseUrl = 'https://api.themoviedb.org/3'; 


  constructor(private _HttpClient: HttpClient) {}

    getItemDetails(id: string, media_type: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/${media_type}/${id}?api_key=${this.apiKey}`);
  } 

    getSimilar(id: string, media_type: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/${media_type}/${id}/similar?api_key=${this.apiKey}`);
  } 

  getTrendingShow(mediaType:string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/trending/${mediaType}/week?api_key=${this.apiKey}`);
  }

getMovieGenres() {
  return this._HttpClient.get(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`);
}

getTvGenres() {
  return this._HttpClient.get(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}&language=en-US`);
}

getMoviesByGenre(genreId: number) {
  return this._HttpClient.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}`);
}

getTvByGenre(genreId: number) {
  return this._HttpClient.get(`${this.baseUrl}/discover/tv?api_key=${this.apiKey}&with_genres=${genreId}`);
}

}

// https://api.themoviedb.org/3/movies/225171/week?api_key=89ff14c291cd262728fa498371ef8913

// https://api.themoviedb.org/3/trending/tv/week?api_key=89ff14c291cd262728fa498371ef8913


