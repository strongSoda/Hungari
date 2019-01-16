import React, { Component } from 'react';

    /**
     * Note: this is the new context API.
     */
 // setting up context API
    // created context object
    const ProductContext = React.createContext();
    // context object comes with two objects 
    // 1. Provider - provides info for all app so set at top of app. One source of truth 
    // 2. Consumer - can be used anywhere to access info provided by Provider

class ProductProvider extends Component {

    state = {  }
    render() { 
        return (
            // returning product context's provider within a class based component.
            // sits on top of the component tree.
            // so return all the children 
            <ProductContext.Provider value="hello from context">
                { this.props.children }
            </ProductContext.Provider>
         );
    }
}
 
const ProductConsumer = ProductContext.Consumer;
// exporting both provider & consumer
export { ProductProvider, ProductConsumer }
// export default ProductProvider;