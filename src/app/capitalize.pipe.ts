import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    const lower: string = value.toString().toLowerCase();

    let words = lower.split(' ');

    words = words.map((word => {
       if (word !== 'of' && word !== 'the') {
         return this.capitalize(word);
       } else {
         return word;
       }
    }));

    words[0] = this.capitalize(words[0]);

    words = words.map((word) => {return word.length === 0 ? ' ' : word; })

    const transformed =  words.reduce((prev, current, i) => {
      console.log('w=', current.length === 0);
      return prev + ' ' + (current.length === 0 ? ' ' : current);
    }, '');

    return transformed;
  }

}
