import React, { Component } from 'react';
class Product extends Component {
    render() { 
        const rows = [];
        this.props.products.forEach((element,key) => {
            // console.log(element.name);
            rows.push(<div key={key}>{element.name}</div>);
        });
        console.log(rows);
        return ( 
            <div>
                {rows}
            </div>
         );
    }
}
 
export default Product;