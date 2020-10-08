import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para saber cual es la ruta activa
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  // Propiedades
  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {

    this.loadingArtist = true;
    // Para subscribirnos a cualquier cambio que tenga este parametro(s) por el url
    this.router.params.subscribe( params => {
      // Vemos todos los params que se han recibido por el url
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

  }

  getArtista(id: string) {

    this.loadingArtist = true;

    this.spotify.getArtista(id)
    .subscribe( data => {
      console.log(data);
      this.artista = data;

      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {

    this.spotify.getTopTracks(id)
    .subscribe( data => {
      console.log(data);
      this.topTracks = data;
    });
  }

}
