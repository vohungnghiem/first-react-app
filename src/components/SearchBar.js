import React from 'react';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleStockCheck = this.handleStockCheck.bind(this);
    }
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    handleStockCheck(e) {
        this.props.onIsInStockCheck(e.target.checked);
    }
    render() {
        return (
            <form>
                <input value={this.props.filterText} onChange={this.handleFilterTextChange} />
                <label htmlFor="">
                    <input type="checkbox" checked={this.props.isInStockOnly} onChange={this.handleStockCheck} />
                </label>
            </form>
        );
    }
}
export default SearchBar;