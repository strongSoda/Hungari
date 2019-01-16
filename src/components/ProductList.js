import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';

class ProductList extends Component {
    state = { 
        products: storeProducts
     }
    render() { 
        // debugging final rendering of products
        // console.log(this.state.products);
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
                                    return <h1>{value}</h1>; 
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>  
                // <Product></Product>
        );
    }
}
 
export default ProductList;