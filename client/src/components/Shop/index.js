import React from 'react';
import {useQuery} from '@apollo/client'
import {QUERY_ALL_PRODUCTS} from '../../utils/queries';
import ProductList from '../ProductList'

// get all products
// 
const Shop = () => {

    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS)
    const products = data && data.products

    return (
        <div className="container mt-5">
            <div className="row">
                {products && products.map(product => (
                    <div key={product._id} className="col-md-4">
                        <div className="thumbnail">
                        <img className="card-img-top" src={`/images/${product.image}`} alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <button className="btn btn-primary btn-block">Buy</button>
                            <div className="card-footer text-muted">
                                {product.price}
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Shop;