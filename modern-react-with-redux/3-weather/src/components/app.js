import React, {Component} from 'react';
import SearchBar from './search_bar';
import CityList from './city_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <CityList/>
            </div>
        );
    }
}
