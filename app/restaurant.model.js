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
                    this.rating = 2.5;
                }
                return Restaurant;
            }());
            exports_1("Restaurant", Restaurant);
        }
    }
});
//# sourceMappingURL=restaurant.model.js.map