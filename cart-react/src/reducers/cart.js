import * as Types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));

// var initialState = data ? data : [];

var initialState = [{
    product: {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51wcd%2Bz24TL._SX425_.jpg',
        description: 'Sản phẩm do apple sản phẩm',
        price: 500,
        inventory: 10,
        rating: 4
    },
    quantity: 5
}];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART:
            console.log(action);

            return [...state];
        default: return [...state];
    }
}

export default cart;