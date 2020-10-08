import { Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistaComponent }, // Aqui recibimos un parametro llamado id
    { path: '', pathMatch: 'full', redirectTo: 'home' }, // Cualquier path vacio redireccionara al home
    { path: '**', pathMatch: 'full', redirectTo: 'home' }, // Cualquier otro path redireccionara al home
];