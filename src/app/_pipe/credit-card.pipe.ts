import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string, type?: string): any {
    if(type === undefined || type === 'credit') {
      value = value.replace(/\s+/g, '');
      let builder = [];
      for(let i=0; i<value.length; i++) {
        builder.push(value.charAt(i));
        if((i + 1) % 4 == 0 && i != value.length - 1) {
          builder.push(' ');
        }
      }
      return builder.join('');
    } else if(type === 'expiry') {
      let builder = [];
      for(let i=0; i<value.length; i++) {
        builder.push(value.charAt(i));
        if(i == 1 && (i == value.length - 1 || value.charAt(i+1) != '/')) {
          builder.push('/');
        }
      }
      return builder.join('');
    } else {
      return value;
    }
  }

}
