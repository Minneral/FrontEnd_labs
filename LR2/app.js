var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a;
var products = (_a = {
        shoes: {
            boots: [
                {
                    number: 1001,
                    size: 38,
                    color: 'черный',
                    price: 5000,
                },
                {
                    number: 1002,
                    size: 41,
                    color: 'коричневый',
                    price: 7000,
                },
            ],
            sneakers: [
                {
                    number: 2001,
                    size: 42,
                    color: 'белый',
                    price: 5500,
                },
                {
                    number: 2002,
                    size: 40,
                    color: 'черный',
                    price: 6500,
                },
            ],
            sandals: [
                {
                    number: 3001,
                    size: 39,
                    color: 'красный',
                    price: 3000,
                },
                {
                    number: 3002,
                    size: 37,
                    color: 'синий',
                    price: 2500,
                },
            ],
        }
    },
    _a[Symbol.iterator] = function () {
        var categories = Object.keys(this.shoes);
        var currentCategoryIndex = 0;
        var currentShoeIndex = 0;
        return {
            next: function () {
                if (currentCategoryIndex >= categories.length ||
                    currentShoeIndex >= products.shoes[categories[currentCategoryIndex]].length) {
                    return { done: true, value: undefined };
                }
                else {
                    var category = categories[currentCategoryIndex];
                    var shoe = products.shoes[category][currentShoeIndex];
                    currentShoeIndex++;
                    if (currentShoeIndex >= products.shoes[category].length) {
                        currentCategoryIndex++;
                        currentShoeIndex = 0;
                    }
                    return { done: false, value: shoe };
                }
            },
        };
    },
    _a);
///////
function filterShoes(products, minPrice, maxPrice, size, color) {
    var e_1, _a;
    var filteredProducts = [];
    for (var shoeType in products.shoes) {
        try {
            for (var _b = (e_1 = void 0, __values(products.shoes[shoeType])), _c = _b.next(); !_c.done; _c = _b.next()) {
                var shoe = _c.value;
                if (shoe.price >= minPrice &&
                    shoe.price <= maxPrice &&
                    shoe.size == size &&
                    shoe.color == color) {
                    filteredProducts.push(shoe.number);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return filteredProducts;
}
var filteredProducts = filterShoes(products, 3000, 7000, 40, 'черный');
console.log(filteredProducts); // [2002]
console.log('\n\n');
var newProducts = {
    shoes: {
        boots: [
            {
                number: 1001,
                size: 38,
                color: 'черный',
                price: 5000,
                discount: 20,
                get totalPrice() {
                    return this.price - this.price * (this.discount / 100);
                },
            },
            {
                number: 1002,
                size: 41,
                color: 'коричневый',
                price: 7000,
                discount: 20,
                get totalPrice() {
                    return this.price - this.price * (this.discount / 100);
                },
            },
        ],
        sneakers: [
            {
                number: 2001,
                size: 42,
                color: 'белый',
                price: 5500,
                discount: 20,
                get totalPrice() {
                    return this.price - this.price * (this.discount / 100);
                },
            },
            {
                number: 2002,
                size: 40,
                color: 'черный',
                price: 6500,
                discount: 20,
                get totalPrice() {
                    return this.price - this.price * (this.discount / 100);
                },
            },
        ],
        sandals: [
            {
                number: 3001,
                size: 39,
                color: 'красный',
                price: 3000,
                discount: 20,
                get totalPrice() {
                    return this.price - this.price * (this.discount / 100);
                },
            },
            {
                number: 3002,
                size: 37,
                color: 'синий',
                price: 2500,
                discount: 20,
                get totalPrice() {
                    return this.price - this.price * (this.discount / 100);
                },
            },
        ],
    },
};
Object.defineProperty(newProducts.shoes.boots[0], 'price', {
    configurable: false,
    enumerable: true,
    writable: true,
});
Object.defineProperty(newProducts.shoes.boots[0], 'number', {
    configurable: false,
    enumerable: true,
    writable: false,
});
