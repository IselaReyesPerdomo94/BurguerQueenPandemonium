import React from 'react';
import './ProductList.css';

const ProductList = (props) => {
    const {amount ,itemName, itemPrice} = props;
    return(
        <div className="product-box">
            <span>{amount}</span>
            <span>{itemName}</span>
            <span>{itemPrice}</span>
            <i className="material-icons icon-create">create</i>
        </div>
    )
}

export default ProductList;