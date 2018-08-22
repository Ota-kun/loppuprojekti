import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import {getAllToilets} from '../utilities/Service'


class Map extends Component {
  constructor() {
    super()
    this.state = {
      lat: 60.17131,
      lng: 24.94145,
      zoom: 17,
      markers: []
    }
  }

  componentDidMount(){
    var allToilets = []
    getAllToilets((data) => {
      data.map(res => {
       allToilets.push(res)
      })
      
      this.setState({markers: allToilets})
    });
  }
   
   render() {
    const googleMarkers = this.state.markers.map(marker => (
      <Marker
          position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) } }
          key={marker.toilet_id}
        />
    ));
   const Map = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 60.171944, lng: 24.941389 } }
        defaultZoom = { 16 }
      >
      {googleMarkers}
    
      </GoogleMap>
   ));
   return(
      <div>
        <Map
          containerElement={ <div style={{ height: `100vh`, width: '100Wh' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;