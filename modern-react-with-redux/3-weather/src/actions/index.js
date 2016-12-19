import axios from 'axios';

const API_KEY = '98afcdf1af327ab9a75afc6749663f93';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${URL}&q=${city}`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}