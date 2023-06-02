import axios from 'axios'
import React, { useEffect, useState } from 'react'


// https://danepubliczne.imgw.pl/api/data/synop/

function Weather() {

    const [danePogodowe, setDanePogodowe] = useState([])

    useEffect(() => {

        const getData = () => {
            axios
                .get('https://danepubliczne.imgw.pl/api/data/synop/')
                .then((dane) => {
                    console.log(dane.data);
                    setDanePogodowe(dane.data)
                })
                .catch((error) => {
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
                {danePogodowe.map(({ id_stacji, stacja }) => {
                    return <div key={id_stacji} >{stacja}</div>;
                })}

            </div>
        </div >
    )
}

export default Weather