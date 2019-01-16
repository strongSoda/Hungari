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
                        <button className="card-btn" disabled={inCart? true: false} 
                         onClick={ () => { console.log('added to the cart') }}>
                        {inCart?
                        (<p className="text-capitalize mb-0" disabled>
                            {" "} in cart
                        </p>): 
                            <i className="fas fa-cart-plus"></i>}
                        </button>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>

         );
    }
}
 
export default Product;

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
        transition: all 0.3s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }

    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 0.5s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .card-btn{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: #009ffd;
        border: none;
        color: #f3f3f3;
        font-size: 1.4rem;
        border-radius: 0.5rem 0rem 0rem 0rem;
        transform: translate(100%,100%);
        transition: all 0.5s linear;
    }
    .img-container:hover .card-btn {
        transform: translate(0,0);
    }
    .card-btn:hover{
        color: #2a2a72;
        cursor: pointer;
    }
`;