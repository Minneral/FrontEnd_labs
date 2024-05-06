type Shoe = {
    number: number;
    size: number;
    color: string;
    price: number;
};

interface IterableProductType {
    [Symbol.iterator](): Iterator<Shoe>;
}

type ProductType = {
    [key: string]: {
        [key: string]: Shoe[];
    };
};

const products: ProductType & IterableProductType = {
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
    },

    [Symbol.iterator](): Iterator<Shoe> {
        const categories = Object.keys(this.shoes);
        let currentCategoryIndex = 0;
        let currentShoeIndex = 0;

        return {
            next(): IteratorResult<Shoe> {
                if (
                    currentCategoryIndex >= categories.length ||
                    currentShoeIndex >= products.shoes[categories[currentCategoryIndex]].length
                ) {
                    return { done: true, value: undefined as any };
                } else {
                    const category = categories[currentCategoryIndex];
                    const shoe = products.shoes[category][currentShoeIndex];
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
};


///////

function filterShoes(products : ProductType, minPrice : number, maxPrice : number, size : number, color : string) {
    let filteredProducts = [];

    for (let shoeType in products.shoes) {

        for (let shoe of products.shoes[shoeType]) {

            if (
                shoe.price >= minPrice &&
                shoe.price <= maxPrice &&
                shoe.size == size &&
                shoe.color == color
            ) {
                filteredProducts.push(shoe.number);
            }
        }
    }

    return filteredProducts;
}

let filteredProducts = filterShoes(products, 3000, 7000, 40, 'черный');
console.log(filteredProducts); // [2002]
console.log('\n\n');


/// 4

type newShoe = {
    number: number;
    size: number;
    color: string;
    price: number;
    discount: number;
    get totalPrice() : number;
};

type newProductType = {
    [key: string]: {
        [key: string]: newShoe[];
    };
};

let newProducts : newProductType = {
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