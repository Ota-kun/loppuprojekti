import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';


class InfoWindowMap extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            isOpen: false
        }
    
    }
    
    handleToggleOpen = () => {
    
        this.setState({
            isOpen: true
        });
    }
    
    handleToggleClose = () => {
        this.setState({
            isOpen: false
        });
    }
    render() {
    
        return (
        <Marker
        key={this.props.index}
        position={{ lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng)}}
        label={this.props.toilet_id}
        onClick={() => this.handleToggleOpen()}
    >

    {
        this.state.isOpen &&
    <InfoWindow onCloseClick={this.handleToggleClose}>
        <h1>kukkuu!!!</h1>
    </InfoWindow>
    }


    </Marker>

    )
    
    }
}

export default InfoWindowMap;