import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

const WeatherGraph = (props) => {
    function actual(data) {
        return _.round(data[0]);
    }

    function average(data) {
        return _.round(_.sum(data)/data.length);
    }

    return (
        <div>
            <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{actual(props.data) + props.units +" ("+ average(props.data) + props.units + ")"}</div>
        </div>
    );
};

export default WeatherGraph;