import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: props.initialTerm};
    }

    render() {
        return(
            <div className="search-bar">
                <input
                    value={this.state.searchTerm}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({searchTerm: term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;