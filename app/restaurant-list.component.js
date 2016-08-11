System.register(['angular2/core', './restaurant.component', './edit-restaurant.component', './restaurant-rating.component', './specialty.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, restaurant_component_1, edit_restaurant_component_1, restaurant_rating_component_1, specialty_pipe_1;
    var RestaurantListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurant_component_1_1) {
                restaurant_component_1 = restaurant_component_1_1;
            },
            function (edit_restaurant_component_1_1) {
                edit_restaurant_component_1 = edit_restaurant_component_1_1;
            },
            function (restaurant_rating_component_1_1) {
                restaurant_rating_component_1 = restaurant_rating_component_1_1;
            },
            function (specialty_pipe_1_1) {
                specialty_pipe_1 = specialty_pipe_1_1;
            }],
        execute: function() {
            RestaurantListComponent = (function () {
                function RestaurantListComponent() {
                    this.specialtyFilter = "all";
                }
                RestaurantListComponent.prototype.restaurantClicked = function (restaurant) {
                    this.selectedRestaurant = restaurant;
                };
                RestaurantListComponent.prototype.onSpecialtyChange = function (filterOption) {
                    this.specialtyFilter = filterOption;
                };
                RestaurantListComponent = __decorate([
                    core_1.Component({
                        selector: 'restaurant-list',
                        inputs: ['restaurantList'],
                        directives: [restaurant_component_1.RestaurantComponent, edit_restaurant_component_1.EditRestaurantComponent, restaurant_rating_component_1.RestaurantRatingComponent],
                        pipes: [specialty_pipe_1.SpecialtyPipe],
                        template: "\n    <select (change)=\"onSpecialtyChange($event.target.value)\">\n      <option value=\"all\">View All Restaurants</option>\n      <option value=\"Italian\">View Italian Restaurants</option>\n      <option value=\"Mexican\">View Mexican Restaurants</option>\n      <option value=\"American\">View American Restaurants</option>\n    </select>\n    <restaurant-display *ngFor=\"#currentRestaurant of restaurantList | specialty:specialtyFilter\"\n      [restaurant]=\"currentRestaurant\" (click)=\"restaurantClicked(currentRestaurant)\"\n      [class.selected]=\"currentRestaurant === selectedRestaurant\">\n    </restaurant-display>\n    <edit-restaurant *ngIf=\"selectedRestaurant\" [restaurant]=\"selectedRestaurant\"></edit-restaurant>\n    <restaurant-rating *ngIf=\"selectedRestaurant\" [restaurant]=\"selectedRestaurant\"></restaurant-rating>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RestaurantListComponent);
                return RestaurantListComponent;
            }());
            exports_1("RestaurantListComponent", RestaurantListComponent);
        }
    }
});
//# sourceMappingURL=restaurant-list.component.js.map