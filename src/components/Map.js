import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { NavigationBar } from "./NavigationBar";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const position = [39.8283, -98.5795];
const zoom = "5";
const dragging = true;
const height = { height: "100vh" };
export class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      coords: [
        { lat: 32.9866, lng: -83.6487 },
        { lat: 42.0046, lng: -93.2140 },
        { lat: 44.2394, lng: -114.5103 }
      ]
    };
  }

  GetIcon(_iconSize) {
    return L.icon({
      iconUrl: require("./icons/marker.png"),
      iconSize: [_iconSize],
    });
  }
  render() {
    const { coords } = this.state;
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

          {coords.map(({ lat, lng }, index) => (
            <Marker position={[lat, lng]} icon={this.GetIcon(40)} key={index}>
              <Popup>
                {index + 1} is for popup with lat: {lat} and lon {lng}. 17,000 vaccinations today.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </>
    );
  }
}
