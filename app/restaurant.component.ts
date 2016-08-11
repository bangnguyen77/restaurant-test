import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template: `
    <div>
      <h3>{{ restaurant.name }}</h3>
      <p>{{ restaurant.specialty }}</p>
      <p>{{ restaurant.address }}</p>
      <p>{{ "$" + restaurant.price }}</p>
      <p>{{ restaurant.rating }}<p>
    </div>
  `
})

export class RestaurantComponent {
  public restaurant: Restaurant;
}
