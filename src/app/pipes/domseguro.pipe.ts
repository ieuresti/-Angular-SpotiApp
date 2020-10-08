import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }

  // Recibe un valor (nuestro uri) y luego lo que le queremos concatenar
  transform( value: string, url: string): any {
    // Y pasamos por un domSanitizer (verifica que no es malicioso)
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
