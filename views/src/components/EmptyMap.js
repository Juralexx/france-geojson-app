import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const EmptyMap = (props) => {
    return (
        <MapContainer
            key={null}
            minZoom={5}
            style={{ width: '100vw', height: '100%' }}
            {...props}
        >
            <TileLayer
                className="map-tiles"
                attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
            />
        </MapContainer>
    )
}

export default EmptyMap