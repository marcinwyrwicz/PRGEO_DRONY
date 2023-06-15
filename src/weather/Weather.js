import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './Weather.css'
import WeatherCard from './WeatherCard'

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
            <div className='weather_header'>Dane pogodowe</div>

            <div className='weather_block'>
                {
                    danePogodowe.map(
                        ({ id_stacji, stacja, temperatura, cisnienie }) => {
                            return <WeatherCard key={id_stacji} stacja={stacja} temperatura={temperatura} cisnienie={cisnienie} />
                        })
                }
            </div>
        </div >
    )
}

export default Weather