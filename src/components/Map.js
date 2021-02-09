import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {NavigationBar} from './NavigationBar';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

const position = [39.8283, -98.5795];
const zoom = "5";
const height = { height: "75vh" };
const markers = "./images/marker-icon.png";

export class Map extends React.Component {
  state = {
    loading: true,
    state: null,
  };

  async componentDidMount() {
    const url = "https://api.covidtracking.com/v1/states/current.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ state: data.state });
  }

  GetIcon(_iconSize){
    return L.icon({
      iconUrl: require("./icons/marker.png"),
      iconSize: [_iconSize]
    });
  }

  render() {
    return (
      <>
      <NavigationBar />
        <MapContainer
          center={position}
          zoom={zoom}
          scrollWheelZoom={false}
          style={height}
        >          
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={this.GetIcon(40)}>
            <Popup>
              Location of Marker
            </Popup>
          </Marker>
        </MapContainer>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>{this.state.state}</div>
        )}
      </>
    );
  }
}
