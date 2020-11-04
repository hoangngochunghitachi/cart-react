import React, { Component } from "react";
import { connect } from 'react-redux';
import Product from "../components/Product";
import Products from "../components/Products";
import PropTypes from 'prop-types';

class ProductsContainer extends Component {

    showProducts(products) {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product} />
            });
        }
        return result;
    }

    render() {
        let { products } = this.props;
        return (
            <Products>
                { this.showProducts(products)}
            </Products>
        );
    }
}

ProductsContainer.prototypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);