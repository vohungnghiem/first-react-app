import React, { Fragment } from 'react';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            isInStockOnly: false
        };
        this.handleFilterText = this.handleFilterText.bind(this);
        this.handleStockCheck = this.handleStockCheck.bind(this);
    }
    handleFilterText(filterText) {
        this.setState({
            filterText: filterText
        });
        // console.log(filterText);
    }
    handleStockCheck(check) {
        this.setState({
            isInStockOnly: check
        })
    }
    render() {
        return (
            <Fragment>
                <SearchBar 
                    filterText={this.state.filterText} 
                    onFilterTextChange={this.handleFilterText} 
                    isInStockOnly={this.state.isInStockOnly}
                    onIsInStockCheck={this.handleStockCheck}
                />
                <ProductTable products={this.props.products} />
            </Fragment>
        );
    }
}
export default App;