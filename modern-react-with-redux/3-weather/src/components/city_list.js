import React from 'react';
import {connect} from 'react-redux';
import WeatherGraph from './weather_graph';
import CityMap from './city_map';

class CityList extends React.Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Ville</th>
                    <th>Température</th>
                    <th>Pression</th>
                    <th>Humidité</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );

    }

    renderWeather(weather) {
        const city = weather.city.name;
        const tempetatures = weather.list.map(forecast => forecast.main.temp);
        const pressions = weather.list.map(forecast => forecast.main.pressure / 10);
        const humidites = weather.list.map(forecast => forecast.main.humidity);
        const coord = {lon: weather.city.coord.lon, lat: weather.city.coord.lat};

        return (
            <tr key={city}>
                <td><CityMap lon={coord.lon} lat={coord.lat}/></td>
                <td><WeatherGraph data={tempetatures} units="˚C" color="orange"/></td>
                <td><WeatherGraph data={pressions} units=" kPa" color="green"/></td>
                <td><WeatherGraph data={humidites} units="%" color="blue"/></td>
            </tr>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(CityList);