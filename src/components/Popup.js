import React from "react";
import { Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as vaccineData from "./api/Vaccines.json";

export class Popups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccines: [],
    };
    this.state.vaccines = vaccineData.features.map(elem => {
      return {
        doses: elem.total_moderna_allocation_first_dose_shipments,
        state: elem.jurisdiction
      };
    });
    console.log(this.state.vaccines);
  }

  render() {
    return (
      <>
        {this.state.vaccines.map(({ doses, state }, index) => (
              <Popup key={index}>
                <strong>{state}:</strong> {doses} Moderna vaccinations have been administered thus far.
              </Popup>
          ))}
      </>
    );
  }
}
