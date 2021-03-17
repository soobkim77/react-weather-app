import React from 'react';
import WeatherFetch from './WeatherFetch';

const WeatherCard = () => {
    return (
        <div className="ui inverted red card">
            <h2>City Name</h2>
            <h4>Local Time</h4>
            <h2>Temp</h2>
            <div>
                <h3>Today's Forecast</h3>
                <div className="fiveday">
                    <p>Current Temp</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard