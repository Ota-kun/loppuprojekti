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
      setlatlng: [],
      info: false
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
    this.state.setlatlng = [event.latLng.lat(), event.latLng.lng()]
    console.log(this.state.setlatlng)
  }

  addToilet = () => {
    document.getElementById("map").style.cursor = "help";

  }
  popUp=()=>{
    if(this.state.info==false){
      this.setState({info:true})
      console.log(this.state.info)
    }else{
      this.setState({info:false})
      console.log(this.state.info)
    }
  }

  render() {
    var googleMarkers =this.state.markers.map((marker)=> {
      return (
           <InfoWindowMap lat={marker.latitude} lng={marker.longitude} key={marker.toilet_id} > </InfoWindowMap>
        )  });
      // const googleMarkers = this.state.markers.map(marker => (
      //   <Marker
      //   position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
      //   key={marker.toilet_id}
      //   onClick={this.popUp}
      // >{this.state.info &&
			// 	<InfoWindow
			// 			onCloseClick={this.handleToggle}
			// 			>
			// 		<span>Something</span>
			// 	</InfoWindow>
			//  }
      // </Marker>
      // )); 
    
    
     

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