import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

class ProductList extends Component {
   
    render() { 
       
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>
                        <div className="row">
                        {/* we are getting all the data in the context 
                        directly here eliminating the need to pass
                        something down the component tree as in the
                        case of props, when all the data sits at the
                        top component */}
                            <ProductConsumer>
                                {(value) => {
                                    // console.log(value);
                                    /**
                                     * products is an array. So we are looping through
                                     * all the product on by one.
                                     */
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product}></Product>
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>  
        );
    }
}
 
export default ProductList;