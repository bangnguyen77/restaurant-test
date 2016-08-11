export class Restaurant {
  public allRatings: number[] = [3];
  public allWaitTimes: number[] = [10];
  public ratingAverage: number = 3;
  public waitTimeAverage: number = 10;
  constructor(public name: string, public specialty: string, public address: string, public price: string, public id: number) {}

  getAverageRating() {
    var total = 0;
    for(var rating of this.allRatings) {
      total += rating;
    }
    this.ratingAverage = total / this.allRatings.length;
  }

  getAverageWaitTime() {
    var total: number = 0;
    for(var wait of this.allWaitTimes) {
      total += wait;
    }
    return this.waitTimeAverage = total / this.allWaitTimes.length;
  }
}
