import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zipCode'
})
export class ZipCodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length > 5 && value.charAt(5) !== '-') {
      let builder = [];
      for(let i=0; i<value.length; i++) {
        builder.push(value.charAt(i));
        if(i == 4) {
          builder.push('-');
        }
      }
      return builder.join('');
    } else {
      return value;
    }
  }

}
