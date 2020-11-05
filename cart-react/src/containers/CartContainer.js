import PropTypes from 'prop-types';
import React, { Component } from "react";
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as Message from './../constants/Message';
import * as actions from '../actions/index';

class CartContainer extends Component {

    showCartItem = (cart) => {
        let { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        let result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }

    render() {
        let { cart } = this.props;
        console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
}

CartContainer.prototypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actions.actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actions.actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);