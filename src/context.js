import React, { Component } from 'react';
// importing both all products & details of a single product
import { storeProducts, detailProduct } from './data';

    /**
     * Note: this is the new context API.
     */
 // setting up context API
    // created context object
    const ProductContext = React.createContext();
    // context object comes with two objects 
    // 1. Provider - provides info for all app so set at top of app. One source of truth. 
    // 2. Consumer - can be used anywhere to access info provided by Provider

class ProductProvider extends Component {

    state = { 
        products: [],
        // can be directly written with object destructuring
        detailProduct: detailProduct,
        cart: []
     }

     componentDidMount() {
         this.setProducts();
     }

     setProducts = () => {
         let products = [];

        //  looping through each array object to copy only values into other array.
         storeProducts.forEach( item => {
             const singlItem = {...item};
             products = [...products, singlItem];
         })

         this.setState( () => {
             return {products};
         })
     }

    //  method to get item based on item.
     getItem = (id) => {
        //  compare each products id in array to passed id
        const product = this.state.products.find( item => item.id === id);
        return product;
     }

     handleDetail = (id) => {
        // console.log("hello from detail");
        const product = this.getItem(id);
        this.setState( () => {
            return {detailProduct : product};
        })
     }

     
     addToCart = (id) => {
        // console.log(`hello from addToCart. Id is: ${id}`);
        let tempProducts = [...this.state.products];
        // iterating through the array & finding the index of product
        const index = tempProducts.indexOf(this.getItem(id));
        // grab the product at the returned index
        const product = tempProducts[index];
        // change properties of product when adding to cart
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        // change state
        this.setState( () => {
            return {products: tempProducts, cart: [...this.state.cart], product};
        }, () => {
            console.log(this.state);
        });
     };

    render() { 

         // debugging final rendering of products
        // console.log(this.state.products);

        return (
            // returning product context's provider within a class based component.
            // sits on top of the component tree.
            // so return all the children 
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                { this.props.children }
            </ProductContext.Provider>
         );
    }
}
 
const ProductConsumer = ProductContext.Consumer;
// exporting both provider & consumer
export { ProductProvider, ProductConsumer }
// export default ProductProvider;