import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { NavigationBar } from "./NavigationBar";
import "leaflet/dist/leaflet.css";
import { Markers } from './Markers';

const position = [39.8283, -98.5795];
const zoom = "5";
const dragging = true;
const height = { height: "100vh" };

export class Map extends React.Component {
  render() {
    return (
      <>
        <NavigationBar />
        <MapContainer
          center={position}
          zoom={zoom}
          style={height}
          dragging={dragging}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Markers />
        </MapContainer>
      </>
    );
  }
}
