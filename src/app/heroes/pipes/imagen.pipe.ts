import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen',
  //pure: false

})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    //return "assets/heroes/" + heroe.id + ".jpg";

console.log("procesando imagen");

    if (!heroe.id && !heroe.alt_img){
      return`assets/no-image.png`;
    } else if (heroe.alt_img){
      return heroe.alt_img;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }

}
