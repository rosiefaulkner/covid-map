import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import * as stateData from "./api/States.json";
import { Popups } from './Popup';

export class Markers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [],
    };
    this.state.coords = stateData.features.map(elem => {
      return {
        lat: elem.latitude, 
        lng: elem.longitude
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
    return (
      <>
          {this.state.coords.map(({ lat, lng }, index) => (
            <Marker position={[lat, lng]} icon={this.GetIcon(40)} key={index}>
            <Popups />
            </Marker>
          ))}
      </>
    );
  }
}
