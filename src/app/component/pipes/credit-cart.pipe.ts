import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCart',
  standalone: true
})
export class CreditCartPipe implements PipeTransform {

  transform(value: string): string {

    const parts = value.match(/.{1,4}/g);
    return parts ? parts.join('-') : value;
  }

}
