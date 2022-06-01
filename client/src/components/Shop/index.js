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
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary btn-cart m-3" onClick={() => setPage("cart")}> Cart ({cart.length})</button>
            </div>
            
            <div className="container mt-5">
                <div className="row">
                    {products && products.map(product => (
                        <div key={product._id} className="col-md-4">
                            <div className="thumbnail">
                            <img className="card-img-top" src={`/images/${product.image}`} alt={product.name} />
                            <div className="card-body product-card-text">
                                <h5 className="card-title product-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <button className="btn btn-primary btn-block" onClick={() => addToCart(product)}>Add To Cart</button>
                                <div className="card-footer product-price">
                                    ${product.price}
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
            <div className="nav-checkout-shop">
                <button className="btn btn-primary" onClick={() => setPage("products")}>Back to Shop</button>
                {cart.length && 
                <div className="check-total-container">
                <button className="btn btn-primary">Your total is ${total}</button>
                </div>}
            </div>
            <div className="container mt-5">
                <div className="row">
            {cart.length > 0 ? 
            cart
            .map(product => (
                <div key={product._id} className="col-md-4">
                    <div className="thumbnail">
                    <img className="card-img-top" src={`/images/${product.image}`} alt={product.name} />
                        <div className="card-body cart-card-text">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <div className="card-footer text-muted">
                                {product.price}
                            </div>
                            <button className="btn btn-primary" onClick={() => deleteProduct(product)}>Delete</button>
                        </div>
                    </div>
                    
                </div>
            )) : <h1>You don't have items on your cart, Buy something!</h1>}
            </div>
            </div>

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