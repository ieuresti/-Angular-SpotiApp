import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

// Esto le dice a Angular que este servicio se va a poder inyectar en otros componentes, servicios, en cualquier lugar
// con providedIn: 'root' ya no hace falta especificar esto en app.module.ts
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      // Aqui especificamos todos los headers que la peticion de spotify necesita (token_type y access_token)
      'Authorization': 'Bearer BQD0Bx12KAqW7-Z4mXasoNHCLV0Ou4z2WVUDKmjeVTLtJYh2DDXzQhYHc0mA1BfsdoTDveSg-ow6UH7TIB8'
    });

    return this.http.get(url, {headers});
  }

  // Hacemos las peticiones al API de Spotify
  getNewReleases() {

    // Espeificamos el arg que va a recibir el query para que realize la peticion y regrese el observable
    return this.getQuery('browse/new-releases?country=JP&limit=20')
    // Y con el operador map filtramos solo la inf que nos interesa
    .pipe( map( data => data['albums'].items));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&market=JP&limit=15`)
    .pipe( map( data => data['artists'].items));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=JP`)
    .pipe( map( data => data['tracks']));
  }
}
