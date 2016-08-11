import { Pipe, PipeTransform } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Pipe({
  name: 'specialty',
  pure: false
})
export class SpecialtyPipe implements PipeTransform {
  transform(input: Restaurant[], args) {
    var specialtyFilter = args[0];
    if (specialtyFilter === "Italian") {
      return input.filter((restaurant) => {
        return restaurant.specialty === "Italian";
      });
    } else if (specialtyFilter === "Mexican") {
      return input.filter((restaurant) => {
        return restaurant.specialty === "Mexican";
      });
    } else if (specialtyFilter === "American") {
      return input.filter((restaurant) => {
        return restaurant.specialty === "American";
      });
    } else {
      return input;
    }
  }
}
