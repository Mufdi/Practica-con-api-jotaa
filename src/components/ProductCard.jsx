import React from "react";

function ProductCard({ product }) {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h1>{product.id}</h1>
            <img
                src={product.image}
                width="300"
                height="auto"
                alt={product.name}
            />
            <h1>${product.price}</h1>
        </div>
    );
}

export default ProductCard;
