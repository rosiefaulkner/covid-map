import React from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './css/Leaflet.css';

export function Map() {
    const position = [39.8283, -98.5795]
    return (
        <MapContainer 
        center={position} 
        zoom="3" 
        scrollWheelZoom={false}
        style={{height: "50vh"}}
        >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </MapContainer>
    );
}
