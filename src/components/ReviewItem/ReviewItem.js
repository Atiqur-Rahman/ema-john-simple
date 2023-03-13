import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, shipping } = props.product;
    return (
        <div>
            <h2>This is review item: {name}</h2>
        </div>
    );
};

export default ReviewItem;
