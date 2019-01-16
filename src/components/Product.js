import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
 
class Product extends Component {
    
    state = {  }
    
    render() { 

        const { id, title, img, price, inCart} = this.props.product;

        return ( 
            <ProductWrapper className="mx-auto col-9 col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={ () => {console.log('you clicked me on the img conatiner') }}>
                        <Link to='/details'>
                            <img src={img} alt={title} className="card-img-top"></img>
                        </Link>
                        <button className="btn-cart" disabled={inCart? true: false} 
                         onClick={ () => { console.log('added to the cart') }}>
                        {inCart?
                        (<p className="text-capitalize mb-0" disabled>
                            {" "} in cart
                        </p>): 
                            <i className="fas fa-cart-plus"></i>}
                        </button>
                    </div>
                </div>
            </ProductWrapper>

         );
    }
}
 
export default Product;

const ProductWrapper = styled.div`

`;