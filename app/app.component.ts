import { Component } from 'angular2/core';
import { RestaurantListComponent } from './restaurant-list.component';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <div>
      <h1>Restaurant Reviews</h1>
      <restaurant-list ['restaurantList']="restaurants">
      </restaurant-list>
    </div>
  `
})

export class AppComponent {
  public restaurants: Restaurant[];
  constructor() {
    this.restaurants = [
      new Restaurant('test-name', 'test-specialty', 'test-address', 1, 0),
      new Restaurant('test-name2', 'test-specialty2', 'test-address2', 2, 1),
      new Restaurant('test-name3', 'test-specialty3', 'test-address3', 3, 2)
    ]
  }
}
