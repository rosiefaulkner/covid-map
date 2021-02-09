import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { NavigationBar } from "./NavigationBar";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import * as stateData from "./api/States.json";
import * as vaccineData from "./api/Vaccines.json";

const position = [39.8283, -98.5795];
const zoom = "5";
const dragging = true;
const height = { height: "100vh" };

export class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      coords: [],
      vaccines: [],
    };
    this.state.coords = stateData.features.map(elem => {
      return {
        lat: elem.latitude, 
        lng: elem.longitude
      };
    })
    this.state.vaccines = vaccineData.features.map(elem => {
      return {
        firstDoses: elem.total_moderna_allocation_first_dose_shipments, 
      };
    })
  }

  GetIcon(_iconSize) {
    return L.icon({
      iconUrl: require("./icons/marker.png"),
      iconSize: [_iconSize],
    });
  }

  render() {
    // const { coords } = this.state;
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

          {this.state.coords.map(({ lat, lng }, index) => (
            <Marker position={[lat, lng]} icon={this.GetIcon(40)} key={index}>
              <Popup>
                {index + 1} is for popup with lat: {lat} and lon {lng}. 17,000
                vaccinations today.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </>
    );
  }
}
