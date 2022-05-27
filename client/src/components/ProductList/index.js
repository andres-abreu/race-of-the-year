import React from 'react';


const ProductList = (products) => {
    if (!products.length) {
        return <h3> No products to display </h3>
    }
     return (
        <div>
        {products &&
        products.map(item =>(
            <div className="card" style={"width: 18rem;"}>
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-primary">Buy</button>
            </div>
        </div>
        ))}
        </div>
    )
}

export default ProductList