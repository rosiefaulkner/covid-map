import React from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './css/Leaflet.css';

const position = [39.8283, -98.5795]


export function Map() {
    return (
        <MapContainer 
        center={[43.38621, -79.83713]} 
        zoom="4" 
        scrollWheelZoom={false}
        style={{height: "100vh"}}
        >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        </MapContainer>
    );
}
