import React from 'react';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            form : ''
        }
    }
    onChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    render() {

        return (
           <form>
               <input 
                    type="text" 
                    placeholder="search ..." 
                    value={this.props.filterText} 
                    onChange={this.onChange} />


               <input type="checkbox" defaultChecked={this.props.inStockOnly} />
               show product only in stock
           </form>
        );
    }
}
export default SearchBar