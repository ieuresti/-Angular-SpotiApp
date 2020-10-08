import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent {

  // Recibimos aqui la informacion de home y search component
  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verArtista(item: any) {

    let artistaId;

    if (item.type === 'artist') {
      // Id que viene en el artista
      artistaId = item.id;
    } else {
      // Buscamos el id del artista dentro del arreglo en caso de que item.type === album
      artistaId = item.artists[0].id;
    }
    // Redireccionamos a la pagina que queremos ver(/artist) + el segmento(id) del artista que acabamos de seleccionar
    this.router.navigate(['/artist', artistaId]);
  }

}
