import React, { Component } from 'react';
class Product extends Component {
    render() { 
        const filterText = this.props.filterText;
        const rows = [];
        this.props.products.forEach((element,key) => {
            // console.log(element.name);
            if (element.name.indexOf(filterText) === -1) {
                return;
              }
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