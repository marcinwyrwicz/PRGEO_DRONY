import React from 'react'

function WeatherHeader({ title }) {
    return (
        <div>
            <div className='weather_header'>{title}</div>
        </div>
    )
}

export default WeatherHeader