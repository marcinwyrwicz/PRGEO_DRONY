import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <div>Services
            <div>

                <Link to="/">
                    <button className='home_button'>Mapa</button>
                </Link>
                <Link to="baza_bsp">
                    <button className='home_button'>Biblioteka Dronów!</button>
                </Link> <br />
                <Link to="weather">
                    <button className='home_button'>poka poka ! <br /> pogode </button>
                </Link>
            </div>
        </div>
    )
}

export default Services