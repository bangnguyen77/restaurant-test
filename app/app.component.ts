import { Component } from 'angular2/core';
import { RestaurantListComponent } from './restaurant-list.component';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <div class="container">
      <h1>Restaurant Reviews</h1>
      <restaurant-list [restaurantList]="restaurants">
      </restaurant-list>
    </div>
  `
})

export class AppComponent {
  public restaurants: Restaurant[];
  constructor() {
    this.restaurants = [
      new Restaurant('Italian Restaurant', 'Italian', 'test-address', "$", 0),
      new Restaurant('Mexican Restaurant', 'Mexican', 'test-address2', "$$", 1),
      new Restaurant('American Restaurant', 'American', 'test-address3', "$$$", 2)
    ]
  }
}
