import { Routes } from '@angular/router';

import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { RegisterComponent } from './component/register/register.component';
import { TvComponent } from './component/tv/tv.component';
import { PeopleComponent } from './component/people/people.component';
import { MoviesComponent } from './component/movies/movies.component';
import { Home } from './component/home/home';
import { authGardGuard } from './Gard/auth-gard.guard';
import { DetailsComponent } from './component/details/details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home',canActivate:[authGardGuard], component: Home},
    {path:'about',canActivate:[authGardGuard],component: AboutComponent},
    {path:'movies',canActivate:[authGardGuard],component: MoviesComponent},
    {path:'tv',canActivate:[authGardGuard],component: TvComponent},
    {path:'people',canActivate:[authGardGuard],component: PeopleComponent},
    {path:'details/:id/:media_type',canActivate:[authGardGuard],component: DetailsComponent},

    {path:'login',component: LoginComponent},
    {path:'register',component: RegisterComponent},
    
    {path:'**',component: NotfoundComponent},
];
