import React, {useState} from 'react';
import {useQuery} from '@apollo/client'
import {QUERY_ALL_PRODUCTS} from '../../utils/queries';


const Shop = () => {
    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS)
    const products = data && data.products
    const [cart, setCart] = useState([])
    const [page, setPage] = useState('products')
    
    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const renderProducts = () => {
        return (
            <>
            <button className="btn btn-primary" onClick={() => setPage("cart")}>Go to Cart ({cart.length})</button>
            <div className="container mt-5">
                <div className="row">
                    {products && products.map(product => (
                        <div key={product._id} className="col-md-4">
                            <div className="thumbnail">
                            <img className="card-img-top" src={`/images/${product.image}`} alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <button className="btn btn-primary btn-block" onClick={() => addToCart(product)}>Add To Cart</button>
                                <div className="card-footer text-muted">
                                    {product.price}
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </>
        )
    }

    const deleteProduct = (product) => {
        const name = product.name
        setCart(cart.filter(product => product.name !== name))
    }


    const renderCart = () => {
        let total = 0
        cart.forEach(product => {
            total += product.price
            return total
        })
        
        return (
            <>
            <button className="btn btn-primary" onClick={() => setPage("products")}>Go to Products</button>
            <div className="container mt-5">
                <div className="row">
            {cart && 
            cart
            .map(product => (
                <div key={product._id} className="col-md-4">
                    <div className="thumbnail">
                    <img className="card-img-top" src={`/images/${product.image}`} alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className="card-footer text-muted">
                            {product.price}
                        </div>
                    </div>
                    </div>
                    <button className="btn btn-primary" onClick={() => deleteProduct(product)}>Delete</button>
                </div>
            ))}
            </div>
            </div>
            <button className="btn btn-primary">Go to Checkout</button>
            
            <button className="btn btn-success">Your total is {total}</button>
            </>
        )
    }
    
    
    return (
        <>
        {page === 'products' && renderProducts()}
        {page === 'cart' && renderCart()}
        </>
    )
}

export default Shop;