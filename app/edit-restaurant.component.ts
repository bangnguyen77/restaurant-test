import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'edit-restaurant',
  inputs: ['restaurant'],
  template: `
    <div class="restaurant-edits">
      <h3>Edit {{ restaurant.name }}</h3>
      <input [(ngModel)]="restaurant.name">
      <input [(ngModel)]="restaurant.specialty">
      <input [(ngModel)]="restaurant.address">
      <input [(ngModel)]="restaurant.price">
    </div>
  `
})
export class EditRestaurantComponent {
  public restaurant: Restaurant;
}
