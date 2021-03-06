import { Component } from 'angular2/core';
import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from './restaurant.model';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { RestaurantRatingComponent } from './restaurant-rating.component';
import { SpecialtyPipe  } from './specialty.pipe';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, EditRestaurantComponent, RestaurantRatingComponent],
  pipes: [SpecialtyPipe],
  template: `
    <select (change)="onSpecialtyChange($event.target.value)">
      <option value="all">View All Restaurants</option>
      <option value="Italian">View Italian Restaurants</option>
      <option value="Mexican">View Mexican Restaurants</option>
      <option value="American">View American Restaurants</option>
    </select>
    <restaurant-display *ngFor="#currentRestaurant of restaurantList | specialty:specialtyFilter"
      [restaurant]="currentRestaurant" (click)="restaurantClicked(currentRestaurant)"
      [class.selected]="currentRestaurant === selectedRestaurant">
    </restaurant-display>
    <edit-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></edit-restaurant>
    <restaurant-rating *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></restaurant-rating>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public selectedRestaurant: Restaurant;
  public specialtyFilter: string = "all";

  restaurantClicked(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
  }

  onSpecialtyChange(filterOption) {
    this.specialtyFilter = filterOption;
  }
}
