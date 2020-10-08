import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  // Propiedades
  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    // Bandera del loading cuando esta cargando
    this.loading = true;
    // Por defecto hasta aqui no hay errores
    this.error = false;

    // Apenas se inicialize el HomeComponent llamamos la funcion de getNewReleases de spotify
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      // Bandera del loading cuando deje de cargar(una vez que ya tenemos la data)
      this.loading = false;
      // Si sucede un error...
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      console.log(errorServicio);
      // Mostramos el error que Spotify nos arroja
      this.mensajeError = errorServicio.error.error.message;
    });
  }

}
