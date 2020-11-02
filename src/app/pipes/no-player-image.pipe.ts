import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noPlayerImage'
})
export class NoPlayerImagePipe implements PipeTransform {

  transform(img: any[]): string {
    if ( !img ){
      return 'assets/Images/no-user.png';
    }
  }
}
