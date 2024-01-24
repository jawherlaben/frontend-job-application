import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (value) {
      return new Date(value).toISOString().split('T')[0];
    }
    return '';
  }
}
