import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title : ""
        }
    }

    render() {
        const {
            searchByTitle,
        } = this.props;

        return (
            <Input icon={{name: 'search', circular: true, link: true}}
                    value={this.state.name}
                    onChange={(e) => searchByTitle(e.target.value)}
            />
        )
    }
}

export default SearchBar