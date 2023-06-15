import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './Weather.css'
// https://danepubliczne.imgw.pl/api/data/synop/

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
            <div>Dane pogodowe</div>
            <div>
                {
                    danePogodowe.map(
                        ({ stacja, temperatura, cisnienie }) => {
                            return <div className='weather_card'>
                                <div className='weather_title'>Dane ze stacji {stacja}</div>
                                <div className='weather_params'>
                                    Temperatura: {temperatura} &deg;C, <br />
                                    Ciśnienie: {cisnienie} hPa
                                </div>
                            </div>
                        })
                }

            </div>
        </div >
    )
}
// {/* {
//                     danePogodowe.map(({ id_stacji, stacja }) => {
//                         return <div key={id_stacji} >{stacja}</div>;
//                     })
//                 } */}
export default Weather