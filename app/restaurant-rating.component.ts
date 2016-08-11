import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-rating',
  inputs: ['restaurant'],
  template: `
    <div>
      <label for="rating">Rate from 1 to 5</label>
      <input #rating class="rating" type="number">
      <label for="wait-time">How long did you wait?</label>
      <input #waitTime class="wait-time" type="number">
      <button (click)="addReview(rating.value, waitTime.value)">Submit Review</button>
    </div>
  `
})
export class RestaurantRatingComponent {
  public restaurant: Restaurant;

  addReview(test, test2) {
    test = parseInt(test);
    test2 = parseInt(test2);

    this.restaurant.allRatings.push(test);
    this.restaurant.allWaitTimes.push(test2);
    this.restaurant.getAverageRating();
    this.restaurant.getAverageWaitTime();
  }
}
