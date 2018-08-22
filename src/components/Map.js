import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { getAllToilets } from '../utilities/Service'
import "../Map.css"
import InfoWindowMap from './InfoWindowMap.js'
class Map extends Component {
  constructor() {
    super()
    this.state = {
      lat: 60.17131,
      lng: 24.94145,
      zoom: 17,
      markers: [],
      admarker:false

    }
  }
  
  componentDidMount() {
  
    var allToilets = []
    getAllToilets((data) => {
      data.map(res => {
        allToilets.push(res)
      })

      this.setState({ markers: allToilets })
    });
  }
  getLocation = (event) => {
    if(this.state.admarker==true){
    var allmarkers=this.state.markers;
    this.state.setlatlng = [event.latLng.lat(), event.latLng.lng()]
    allmarkers.push({latitude:event.latLng.lat(), longitude:event.latLng.lng(), name:"kukkuu", toilet_id:"10000"})
    this.setState({markers:allmarkers})
    console.log(allmarkers)
    }
  }

  addToilet = () => {
    this.setState({admarker:true})

  }

  render() {
    var googleMarkers =this.state.markers.map((marker)=> {
      return (
          <InfoWindowMap lat={marker.latitude} lng={marker.longitude} key={marker.toilet_id} > </InfoWindowMap>
        )  });  
    const Map = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 60.171944, lng: 24.941389 }}
        defaultZoom={16}
        defaultOptions={{
          streetViewControl: true,
          scaleControl: true,
          mapTypeControl: false,
            panControl: true,
            zoomControl: true,
            rotateControl: true,
            fullscreenControl: true,

          }
        }
        
        
        onClick={this.getLocation} >
        {googleMarkers}
      </GoogleMap>
    ));
    return (
      <div id="map"   >
        <button id="nappi" onClick={this.addToilet}>jeesus</button>
        <Map id="map" 
          containerElement={<div style={{ height: `100vh`, width: '100Wh' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          controls={null}
        >
        </Map>
      </div>
    );
  }
};
export default Map;