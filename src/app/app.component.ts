import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Home } from './home/home';

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
