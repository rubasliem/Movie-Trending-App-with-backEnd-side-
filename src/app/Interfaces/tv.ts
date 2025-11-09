export interface TV {
    overview: string;
    poster_path: string;
    popularity: number;
    vote_average: number;
    name: string;
    first_air_date: string;
     genres: Genre[]; 

}
export interface Genre {
  id: number;
  name: string;
}