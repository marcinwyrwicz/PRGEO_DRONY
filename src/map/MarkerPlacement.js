import React, { useState } from 'react'
import { Marker, Popup, useMapEvent } from 'react-leaflet'
import { dronIcon } from './Icon'

function MarkerPlacement() {
    const [position, setPosition] = useState(null)
    const map = useMapEvent({
        click: (e) => {
            console.log(e.latlng.lng)
            setPosition(e.latlng)

        }
    })


    return position === null ? null : (
        <div>
            <Marker icon={dronIcon} position={position}>
                <Popup >
                    długość:  {position.lng}, <br /> szerokość: {position.lat}
                </Popup>
            </Marker>

        </div >
    )
}

export default MarkerPlacement