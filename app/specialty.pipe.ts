import { Pipe, PipeTransform } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Pipe({
  name: 'specialty',
  pure: false
})
export class SpecialtyPipe implements PipeTransform {
  transform(input: Restaurant[], args) {
    var specialtyFilter = args[0];
    var output: Restaurant[] = [];
    if (specialtyFilter === "Italian") {
      for (var i=0; i<input.length; i++) {
        if (input[i].specialty === "Italian") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (specialtyFilter === "Mexican") {
      for (var i=0; i<input.length; i++) {
        if (input[i].specialty === "Mexican") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (specialtyFilter === "American") {
      for (var i=0; i<input.length; i++) {
        if (input[i].specialty === "American") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
