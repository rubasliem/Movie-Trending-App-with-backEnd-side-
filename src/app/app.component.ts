import { Component } from '@angular/core';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './component/movies/movies.component';
import { TvComponent } from './component/tv/tv.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { Home } from './component/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Home,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    MoviesComponent,
    TvComponent,
    LoginComponent,
    RegisterComponent,
    CommonModule,
    RouterOutlet,
    HttpClientModule, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
