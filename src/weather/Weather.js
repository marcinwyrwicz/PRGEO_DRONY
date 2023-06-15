import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './Weather.css'

import WeatherHeader from './WeatherHeader'
import WeahaterBlockOfCards from './WeahaterBlockOfCards'

function Weather() {
    // react hook on state
    const [danePogodowe, setDanePogodowe] = useState([])

    useEffect(() => {

        const getData = () => {
            axios
                .get('https://danepubliczne.imgw.pl/api/data/synop/')
                .then(
                    (dane) => {
                        console.log(dane.data);
                        setDanePogodowe(dane.data)
                    })
                .catch(
                    (error) => {
                        console.log(error);
                        return null;
                    })
        }
        getData();

    }, [])

    return (
        <div>
            <WeatherHeader title='Lista stacji pogodowych' />
            <WeahaterBlockOfCards danePogodowe={danePogodowe} />
        </div >
    )
}

export default Weather