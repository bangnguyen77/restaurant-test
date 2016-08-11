System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Restaurant;
    return {
        setters:[],
        execute: function() {
            Restaurant = (function () {
                function Restaurant(name, specialty, address, price, id) {
                    this.name = name;
                    this.specialty = specialty;
                    this.address = address;
                    this.price = price;
                    this.id = id;
                    this.allRatings = [3];
                    this.allWaitTimes = [10];
                    this.ratingAverage = 3;
                    this.waitTimeAverage = 10;
                }
                Restaurant.prototype.getAverageRating = function () {
                    var total = 0;
                    for (var _i = 0, _a = this.allRatings; _i < _a.length; _i++) {
                        var rating = _a[_i];
                        total += rating;
                    }
                    this.ratingAverage = total / this.allRatings.length;
                };
                Restaurant.prototype.getAverageWaitTime = function () {
                    var total = 0;
                    for (var _i = 0, _a = this.allWaitTimes; _i < _a.length; _i++) {
                        var wait = _a[_i];
                        total += wait;
                    }
                    return this.waitTimeAverage = total / this.allWaitTimes.length;
                };
                return Restaurant;
            }());
            exports_1("Restaurant", Restaurant);
        }
    }
});
//# sourceMappingURL=restaurant.model.js.map