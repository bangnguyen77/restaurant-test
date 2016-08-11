import { Component } from 'angular2/core';
import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent],
  template: `
    <restaurant-display *ngFor="currentRestaurant of restaurantList"
      [restaurant]="currentRestaurant" (click)="restaurantClicked(currentRestaurant)">
      [class.selected]="currentRestaurant === selectedRestaurant">
    </restaurant-display>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public selectedRestaurant: Restaurant;

  restaurantClicked(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
  }
}
