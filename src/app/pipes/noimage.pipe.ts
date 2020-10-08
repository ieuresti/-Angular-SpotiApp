import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    // Si no viene(existe) nada en el arreglo de imagenes
    if (!images) {
      // Retornamos una img vacia default
      return 'assets/img/noimage.png';
    }

    // Si viene un arreglo de imagenes(existen)
    if (images.length > 0) {
      // Retornamos de la 1er imagen
      return images[0].url;
    } else {
      // Caso contrario si viene sin posiciones, vacio
      return 'assets/img/noimage.png';
    }

  }

}
